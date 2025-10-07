# Content Management Guide

This guide explains how to update and manage content on your website.

## 📝 Table of Contents

1. [Blog Posts](#blog-posts)
2. [About Page](#about-page)
3. [Homepage Content](#homepage-content)
4. [SEO & Meta Tags](#seo--meta-tags)
5. [Images & Assets](#images--assets)
6. [Forms & Email](#forms--email)
7. [Analytics](#analytics)

---

## Blog Posts

### Location
`src/data/blogPosts.js`

### How to Add a New Blog Post

1. Open `src/data/blogPosts.js`
2. Add a new object to the `blogPosts` array:

```javascript
{
  id: 'unique-post-id',
  slug: 'url-friendly-slug',
  title: 'Your Blog Post Title',
  excerpt: 'A short 1-2 sentence summary',
  category: 'Case Study', // or 'Strategy', 'Automation', etc.
  date: 'Mar 15, 2025',
  readTime: '8 min read',
  author: 'Martin Tamm',
  content: `
# Your Blog Post Title

## Introduction

Your content here...

### Subheading

More content...

## Conclusion

Final thoughts...
  `
}
```

3. Save the file
4. The post will automatically appear on `/insights` and be accessible at `/insights/your-slug`

### Markdown Formatting

The blog system supports:
- `# Heading 1`
- `## Heading 2`
- `### Heading 3`
- `**Bold text**`
- `- Bullet points`
- `---` (horizontal rule)
- `*Italic text*` (for footnotes)

---

## About Page

### Location
`src/pages/About.jsx`

### What to Update

1. **Profile Information** (lines 20-30)
   - Replace placeholder text with your real bio
   - Update initials or add a profile photo

2. **Experience** (lines 32-48)
   - Update job titles, companies, years, and descriptions
   - Add or remove positions as needed

3. **Education** (lines 50-58)
   - Add your actual degrees and institutions

4. **Certifications** (lines 60-65)
   - List your real certifications

5. **Skills** (lines 67-72)
   - Update with your actual technical and business skills

6. **Contact Links** (lines 80-95)
   - Update LinkedIn URL
   - Verify email and phone are correct

---

## Homepage Content

### Location
`src/pages/HomeComplete.jsx`

### Key Sections to Update

#### 1. Hero Section (lines 115-140)
- **Headline**: "Your Business Has Data. I Turn It Into Revenue."
- **Subheadline**: Update with your value proposition
- **CTA buttons**: Text and links

#### 2. Pain Points (lines 200-230)
- Update the 3 pain points to match your target audience

#### 3. Company Logos (lines 250-280)
- Already includes: Cybernetica, Piletilevi, Ericsson, Icefire, Finestmedia
- To add more: Place logo in `src/assets/` and import

#### 4. Case Studies (lines 300-370)
- **Replace Lorem Ipsum with real results**
- Update metrics and descriptions
- Keep format: "Result: [Specific Outcome]"

#### 5. Testimonials (lines 75-99)
- Replace with real testimonials
- Update names, titles, companies, and quotes
- Keep initials for avatars

#### 6. Running Section (lines 550-600)
- Personal story is already written
- Update if you want different personal angle

---

## SEO & Meta Tags

### Location
`src/components/SEO.jsx`

### Global SEO Settings

Update these values in `SEO.jsx`:

```javascript
const siteUrl = "https://martintamm.com"; // Your actual domain
```

### Page-Specific SEO

Each page has its own SEO component. Update in the page file:

**Homepage** (`src/pages/HomeComplete.jsx`, line 103):
```javascript
<SEO 
  title="Your Custom Title"
  description="Your custom description"
  keywords="your, keywords, here"
/>
```

**Blog Posts**: SEO is auto-generated from post data

### Sitemap

Update `public/sitemap.xml` when you:
- Add new pages
- Publish new blog posts
- Change URLs

---

## Images & Assets

### Location
`src/assets/`

### Current Assets
- `hero-headshot-final.png` - Your professional photo
- `cybernetica-logo.jpg` - Company logo
- `piletilevi-logo.jpg` - Company logo
- `ericsson-logo.png` - Company logo
- `icefire-logo.jpeg` - Company logo
- `finestmedia-logo.png` - Company logo
- `running-data.webp` - Running analytics visualization

### How to Add New Images

1. Place image file in `src/assets/`
2. Import in your component:
   ```javascript
   import myImage from '../assets/my-image.jpg'
   ```
3. Use in JSX:
   ```javascript
   <img src={myImage} alt="Description" />
   ```

### Recommended Image Sizes
- **Headshot**: 800x800px (PNG with transparent background)
- **Company logos**: 200x100px (maintain aspect ratio)
- **Blog featured images**: 1200x630px (Open Graph standard)
- **Icons**: 64x64px or SVG

---

## Forms & Email

### Netlify Forms (Already Configured)

Both forms are ready to collect submissions:

1. **Contact Form** (name: `contact`)
   - Collects: Name, Email, Message
   - Includes GDPR consent checkbox

2. **Lead Magnet Form** (name: `lead-magnet`)
   - Collects: Email
   - Includes consent checkbox

### How to Access Form Submissions

After deploying to Netlify:
1. Go to your Netlify dashboard
2. Click on your site
3. Go to "Forms" tab
4. View all submissions

### Email Notifications

To receive email notifications:
1. Go to Netlify Dashboard → Site Settings → Forms
2. Add "Form notifications"
3. Enter your email address

### Email Marketing Integration

To integrate with Mailchimp/ConvertKit:
1. Use Netlify Functions or Zapier
2. Connect form submissions to your email service
3. See `PHASE_2_4_PLAN.md` for detailed steps

---

## Analytics

### Location
`src/components/Analytics.jsx`

### How to Activate Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `src/components/Analytics.jsx`
4. Replace this line:
   ```javascript
   const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';
   ```
   With:
   ```javascript
   const GA_MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID';
   ```
5. Rebuild and deploy

### Tracking Custom Events

The analytics component includes helper functions:

```javascript
import { trackFormSubmit, trackDownload, trackOutboundLink } from '../components/Analytics';

// Track form submission
trackFormSubmit('contact');

// Track file download
trackDownload('ai-ready-checklist.pdf');

// Track outbound link
trackOutboundLink('https://external-site.com');
```

---

## 🚀 Deployment Checklist

Before deploying, make sure to:

- [ ] Replace all Lorem Ipsum content with real information
- [ ] Update About page with your actual experience
- [ ] Add real testimonials (or remove section)
- [ ] Update case studies with real results (or use Lorem Ipsum disclaimer)
- [ ] Verify all email addresses and phone numbers
- [ ] Update LinkedIn and social media links
- [ ] Add your Google Analytics ID
- [ ] Test all forms locally
- [ ] Update domain in `SEO.jsx`
- [ ] Update `sitemap.xml` with your domain
- [ ] Review Privacy Policy and Terms of Service
- [ ] Generate new AI-Ready Checklist PDF if needed

---

## 📞 Need Help?

If you need assistance with content updates:

1. **Simple text changes**: Edit the files directly
2. **Complex changes**: Refer to this guide or React documentation
3. **Technical issues**: Check the build logs for errors

---

## 🔄 Content Update Workflow

1. Make changes to content files
2. Test locally: `pnpm run dev`
3. Build for production: `pnpm run build`
4. Deploy to Netlify (automatic if connected to Git)
5. Verify changes on live site

---

**Last Updated**: October 7, 2025
