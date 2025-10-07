# Email Marketing Integration Guide

This guide shows you how to integrate email marketing services with your website forms.

## 📧 Recommended Services

### Option 1: Mailchimp (Recommended for Beginners)
- **Free tier**: Up to 500 contacts
- **Easy to use**: Drag-and-drop email builder
- **Automations**: Welcome series, drip campaigns
- **Cost**: Free → $13/month (500-2500 contacts)

### Option 2: ConvertKit (Recommended for Creators)
- **Free tier**: Up to 300 subscribers
- **Creator-focused**: Landing pages, sequences
- **Simple automations**: Tag-based workflows
- **Cost**: Free → $15/month (300-1000 subscribers)

### Option 3: Netlify Functions + SendGrid
- **Most flexible**: Full control
- **Free tier**: 100 emails/day (SendGrid)
- **Requires coding**: More technical setup
- **Cost**: Free → $15/month (40k emails)

---

## 🚀 Quick Setup: Mailchimp Integration

### Step 1: Create Mailchimp Account
1. Go to https://mailchimp.com
2. Sign up for free account
3. Verify your email
4. Complete profile setup

### Step 2: Create Audience
1. Go to "Audience" → "All contacts"
2. Click "Create Audience"
3. Name it: "Website Leads"
4. Add your business details
5. Click "Save"

### Step 3: Get API Key
1. Go to "Account" → "Extras" → "API keys"
2. Click "Create A Key"
3. Copy the API key
4. Save it securely (you'll need it later)

### Step 4: Get Audience ID
1. Go to "Audience" → "All contacts"
2. Click "Settings" → "Audience name and defaults"
3. Look for "Audience ID" (format: abc123def4)
4. Copy and save it

### Step 5: Install Mailchimp SDK

```bash
cd ~/consulting-website
pnpm add @mailchimp/mailchimp_marketing
```

### Step 6: Create Netlify Function

Create file: `netlify/functions/subscribe.js`

```javascript
const mailchimp = require('@mailchimp/mailchimp_marketing');

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1'
});

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email, firstName, lastName, leadMagnet } = JSON.parse(event.body);

    // Add subscriber to Mailchimp
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName || '',
          LNAME: lastName || '',
        },
        tags: leadMagnet ? ['Lead Magnet'] : ['Contact Form'],
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed!',
      }),
    };
  } catch (error) {
    console.error('Mailchimp error:', error);

    // Handle already subscribed
    if (error.status === 400 && error.response.body.title === 'Member Exists') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'Already subscribed!',
        }),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to subscribe',
        details: error.message,
      }),
    };
  }
};
```

### Step 7: Add Environment Variables

Create file: `.env` (for local testing)

```bash
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_AUDIENCE_ID=your_audience_id_here
```

**Important**: Add `.env` to `.gitignore` to keep secrets safe!

For Netlify deployment:
1. Go to Netlify Dashboard → Site Settings → Environment Variables
2. Add the three variables above
3. Save changes

### Step 8: Update Lead Magnet Form

Update `src/pages/HomeComplete.jsx`:

```javascript
const handleLeadMagnetSubmit = async (e) => {
  e.preventDefault();
  
  if (!leadMagnetConsent) {
    alert('Please consent to receive the checklist.');
    return;
  }

  try {
    // Call Netlify function
    const response = await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: leadMagnetEmail,
        leadMagnet: true,
      }),
    });

    const data = await response.json();

    if (data.success) {
      // Redirect to thank you page
      window.location.href = '/thank-you';
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Subscription error:', error);
    alert('Failed to subscribe. Please try again.');
  }
};
```

### Step 9: Create Welcome Email

In Mailchimp:
1. Go to "Automations" → "Create" → "Welcome new subscribers"
2. Design your welcome email
3. Include link to AI-Ready Checklist PDF
4. Add your branding
5. Activate automation

### Step 10: Test Integration

1. Run locally: `pnpm run dev`
2. Fill out lead magnet form
3. Check Mailchimp audience for new subscriber
4. Verify welcome email was sent
5. Check for any errors in console

---

## 🔄 Alternative: ConvertKit Integration

### Step 1: Create ConvertKit Account
1. Go to https://convertkit.com
2. Sign up for free account
3. Complete setup wizard

### Step 2: Get API Key
1. Go to "Settings" → "Advanced" → "API & Webhooks"
2. Copy your "API Secret"
3. Save it securely

### Step 3: Create Form
1. Go to "Grow" → "Landing Pages & Forms"
2. Click "Create New" → "Form"
3. Choose template or start from scratch
4. Customize and publish
5. Copy Form ID from URL

### Step 4: Install ConvertKit SDK

```bash
pnpm add convertkit-api
```

### Step 5: Create Netlify Function

Create file: `netlify/functions/subscribe-convertkit.js`

```javascript
const ConvertKit = require('convertkit-api');

const client = new ConvertKit(process.env.CONVERTKIT_API_SECRET);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email, firstName } = JSON.parse(event.body);

    // Add subscriber to ConvertKit
    await client.addSubscriberToForm(
      process.env.CONVERTKIT_FORM_ID,
      {
        email: email,
        first_name: firstName || '',
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed!',
      }),
    };
  } catch (error) {
    console.error('ConvertKit error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to subscribe',
        details: error.message,
      }),
    };
  }
};
```

### Step 6: Add Environment Variables

```bash
CONVERTKIT_API_SECRET=your_api_secret_here
CONVERTKIT_FORM_ID=your_form_id_here
```

### Step 7: Create Email Sequence

In ConvertKit:
1. Go to "Automate" → "Sequences"
2. Click "New Sequence"
3. Name it: "Lead Magnet Welcome"
4. Add emails:
   - Email 1 (Day 0): Welcome + PDF link
   - Email 2 (Day 3): AI insights tip
   - Email 3 (Day 7): Case study
5. Activate sequence

---

## 📨 Email Templates

### Welcome Email Template

**Subject**: Your AI-Ready Checklist is Here! 🎉

**Body**:
```
Hi there!

Thanks for downloading the AI-Ready Checklist!

👉 Download your checklist here: [LINK TO PDF]

This 10-point checklist will help you assess whether your business is ready to implement AI solutions.

Over the next few weeks, I'll share:
• Real-world AI implementation case studies
• Data analysis tips for business leaders
• Exclusive insights on automation

Looking forward to helping you transform your data into revenue!

Best regards,
Martin Tamm
AI & Data Analysis Consultant

📧 martin.t-amm@live.com
📞 +372 56808182
🌐 [Your Website URL]

P.S. Reply to this email if you have any questions about AI for your business!
```

### Follow-up Email 1 (Day 3)

**Subject**: The #1 Mistake Businesses Make with AI

**Body**:
```
Hi [First Name],

I hope you found the AI-Ready Checklist helpful!

Today, I want to share the #1 mistake I see businesses make when implementing AI...

[Your content here]

Want to discuss how AI can help your specific business challenges?

Book a free 45-minute AI Opportunity Audit: [LINK]

Best,
Martin
```

### Follow-up Email 2 (Day 7)

**Subject**: Case Study: How We Generated €2M+ with AI

**Body**:
```
Hi [First Name],

I wanted to share a real-world example of how AI can drive revenue...

[Case study content]

Ready to explore opportunities for your business?

Let's talk: [LINK TO CONTACT]

Best,
Martin
```

---

## 🔒 Security Best Practices

### 1. Never Commit API Keys
```bash
# Add to .gitignore
.env
.env.local
.env.production
```

### 2. Use Environment Variables
- Store API keys in Netlify environment variables
- Never hardcode secrets in code
- Use different keys for dev/production

### 3. Validate Email Addresses
```javascript
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

### 4. Rate Limiting
```javascript
// Implement rate limiting to prevent abuse
const rateLimit = {};

function checkRateLimit(ip) {
  const now = Date.now();
  const limit = rateLimit[ip] || { count: 0, resetTime: now + 60000 };
  
  if (now > limit.resetTime) {
    limit.count = 0;
    limit.resetTime = now + 60000;
  }
  
  limit.count++;
  rateLimit[ip] = limit;
  
  return limit.count <= 5; // Max 5 requests per minute
}
```

---

## 📊 Tracking & Analytics

### Track Email Signups in Google Analytics

```javascript
// In your form submission handler
if (window.gtag) {
  window.gtag('event', 'sign_up', {
    method: 'lead_magnet',
  });
}
```

### Track Email Opens (Mailchimp)
- Mailchimp automatically tracks opens
- View in "Reports" → "Email" → Select campaign
- See open rate, click rate, etc.

### Track Conversions
- Set up goals in Google Analytics
- Track form submissions → email signups → purchases
- Calculate conversion rates

---

## 🧪 Testing Checklist

- [ ] Test form submission with valid email
- [ ] Test with invalid email format
- [ ] Test with already subscribed email
- [ ] Verify subscriber appears in email service
- [ ] Verify welcome email is sent
- [ ] Test unsubscribe link works
- [ ] Test on mobile devices
- [ ] Check spam folder
- [ ] Verify GDPR consent is recorded
- [ ] Test error handling

---

## 🚀 Launch Checklist

- [ ] API keys added to Netlify environment variables
- [ ] Welcome email sequence activated
- [ ] PDF link works in email
- [ ] Unsubscribe link works
- [ ] GDPR compliance verified
- [ ] Test with real email address
- [ ] Monitor first 10 signups
- [ ] Check deliverability rates
- [ ] Set up email notifications for new subscribers
- [ ] Create content calendar for email campaigns

---

## 📈 Next Steps

1. **Week 1**: Set up email service and test
2. **Week 2**: Create welcome sequence (3-5 emails)
3. **Week 3**: Launch and monitor
4. **Week 4**: Analyze metrics and optimize

---

**Need Help?**
- Mailchimp Support: https://mailchimp.com/help/
- ConvertKit Support: https://help.convertkit.com/
- Netlify Functions: https://docs.netlify.com/functions/overview/
