# 🚀 Deployment Guide - Martin Tamm Consulting Website

This guide will help you deploy your website to **Netlify** or **Vercel** for **100% FREE**.

## ✅ What You Have

Your website is **fully built and ready to deploy**! The production files are in the `dist/` folder.

---

## 🎯 Recommended: Deploy to Netlify (Easiest & Free)

### Method 1: Drag & Drop (No Command Line Required!)

**This is the FASTEST way - takes 2 minutes!**

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Create a free account (or login)
3. Drag and drop the **`dist`** folder from your project
4. Done! Your site is live! 🎉

Netlify will give you a URL like: `https://random-name-123.netlify.app`

**To use a custom domain:**
- Go to Site settings → Domain management
- Add your custom domain (e.g., martintamm.com)
- Follow the DNS instructions

---

### Method 2: GitHub + Netlify (Auto-Deploy on Changes)

**Best for ongoing updates**

#### Step 1: Push to GitHub

```bash
# Navigate to your project
cd ~/consulting-website

# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize
4. Select your repository
5. Configure build settings:
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

**Now every time you push to GitHub, Netlify will automatically rebuild and deploy!**

---

### Method 3: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Navigate to your project
cd ~/consulting-website

# Deploy to production
netlify deploy --prod --dir=dist
```

---

## 🌟 Alternative: Deploy to Vercel (Also Free!)

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd ~/consulting-website

# Login and deploy
vercel login
vercel --prod
```

### Method 2: GitHub + Vercel

1. Push your code to GitHub (see GitHub instructions above)
2. Go to [https://vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects React - just click "Deploy"!

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- ✅ You've built the project: `pnpm run build`
- ✅ The `dist/` folder exists and contains files
- ✅ You've tested locally: `pnpm run dev`
- ✅ All images load correctly
- ✅ Contact form works (currently shows alert)
- ✅ All links work

---

## 🔧 Post-Deployment Tasks

After your site is live:

### 1. Set Up Custom Domain (Optional)

**On Netlify:**
- Site settings → Domain management → Add custom domain
- Update your DNS records as instructed

**On Vercel:**
- Project settings → Domains → Add domain
- Update your DNS records as instructed

### 2. Set Up Email Form (Required for Lead Capture)

Your contact form currently shows an alert. To make it functional:

**Option A: Use Netlify Forms (Free)**
```jsx
// In src/App.jsx, update the form tag:
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form fields */}
</form>
```

**Option B: Use Formspree (Free tier available)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form
3. Update form action to Formspree endpoint

**Option C: Use EmailJS (Free tier available)**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Configure in your form handler

### 3. Set Up Analytics (Optional)

**Google Analytics:**
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Add tracking code to `index.html`

**Plausible (Privacy-friendly alternative):**
1. Sign up at [plausible.io](https://plausible.io)
2. Add script tag to `index.html`

### 4. Set Up SEO

Add to `index.html` in the `<head>` section:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="AI & Data Analysis Consultant in Estonia. Transform your business data into revenue with automation and intelligent insights.">
<meta name="keywords" content="AI consultant Estonia, data analysis, business automation, data-driven decisions">
<meta name="author" content="Martin Tamm">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com/">
<meta property="og:title" content="Martin Tamm - AI & Data Analysis Consulting">
<meta property="og:description" content="Transform your business data into revenue">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourdomain.com/">
<meta property="twitter:title" content="Martin Tamm - AI & Data Analysis Consulting">
<meta property="twitter:description" content="Transform your business data into revenue">
<meta property="twitter:image" content="https://yourdomain.com/og-image.jpg">
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
pnpm install
pnpm run build
```

### Images Not Loading
- Make sure all images are in `src/assets/`
- Check import statements in `App.jsx`
- Rebuild: `pnpm run build`

### Site Not Updating
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check deployment logs on Netlify/Vercel
- Verify you pushed latest changes to GitHub

---

## 📞 Need Help?

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Contact:** martin.t-amm@live.com

---

## 🎉 You're Ready to Deploy!

**Recommended first step:** Use Netlify's drag-and-drop method. It's the fastest way to get your site live!

Good luck! 🚀
