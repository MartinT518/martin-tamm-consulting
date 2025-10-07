# Martin Tamm - AI & Data Analysis Consulting Website

## Overview
Professional consulting website for Martin Tamm, showcasing AI & Data Analysis consulting services. Built with React, Vite, Tailwind CSS, and shadcn/ui components.

**Purpose**: Convert data into revenue for C-level executives and business leaders
**Current State**: Fully functional, ready for deployment
**Last Updated**: October 7, 2025

## Tech Stack
- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.6
- **Styling**: Tailwind CSS 4.1.7
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion 12.15.0
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.6.1
- **Forms**: React Hook Form with Zod validation
- **SEO**: React Helmet Async

## Project Structure
```
consulting-website/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/
│   │   ├── ui/          # shadcn/ui components (40+ components)
│   │   ├── Analytics.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LazyImage.jsx
│   │   └── SEO.jsx
│   ├── data/
│   │   └── blogPosts.js  # Blog content data
│   ├── hooks/
│   │   └── use-mobile.js
│   ├── lib/
│   │   └── utils.js      # Utility functions (cn, etc.)
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Home.jsx
│   │   ├── HomeComplete.jsx
│   │   ├── Insights.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   └── ThankYou.jsx
│   ├── App.css
│   ├── App.jsx           # Main app with routing
│   ├── index.css
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── index.html
├── vite.config.js        # Vite configuration (configured for Replit)
├── package.json
└── tailwind.config.js
```

## Development Setup

### Replit Configuration
- **Server**: Vite dev server on port 5000
- **Host**: 0.0.0.0 (configured for Replit proxy)
- **HMR**: Configured for clientPort 5000
- **Package Manager**: npm (with --legacy-peer-deps for dependency resolution)

### Running Locally
```bash
npm install --legacy-peer-deps
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

## Deployment Configuration
- **Type**: Autoscale (stateless web app)
- **Build Command**: `npm run build`
- **Run Command**: `npx vite preview --host 0.0.0.0`
- **Output Directory**: `dist/`

## Key Features
- Professional hero section with custom headshot and neural network effect
- Pain points section highlighting business challenges
- Company logos (Cybernetica, Piletilevi, Ericsson, Icefire, Finestmedia)
- Case studies with measurable results
- Personal story section with running analytics
- Blog/Insights section with multiple articles
- Contact form for lead capture
- GDPR cookie consent banner
- Privacy Policy & Terms of Service pages
- Fully responsive design
- Smooth animations with Framer Motion
- Dark theme with electric blue and green accents
- SEO optimized with React Helmet

## Routes
- `/` - Home page (complete version)
- `/insights` - Blog listing page
- `/insights/:slug` - Individual blog posts
- `/about` - About page
- `/thank-you` - Form submission confirmation
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service

## Contact Information
- **Email**: martin.t-amm@live.com
- **Phone**: +372 56808182

## Recent Changes
- **October 7, 2025**: Configured for Replit environment & Fixed Critical Issues
  - Updated vite.config.js with proper host and port settings (allowedHosts: true, HMR on port 443)
  - Set up workflow for development server
  - Configured deployment for autoscale
  - Added dist to .gitignore
  - Installed dependencies with legacy peer deps (date-fns version conflict resolved)
  - **Fixed Forms**: Integrated Netlify Forms for contact and lead magnet forms
  - **Form Validation**: Added inline validation with proper error messages (removed alert popups)
  - **Form States**: Added loading and success states with visual feedback
  - **Email Capture**: Both forms now properly capture and submit data to Netlify

## Notes
- The project uses pnpm as package manager in the original setup, but npm works fine with --legacy-peer-deps flag
- There's a peer dependency conflict between date-fns@4.1.0 and react-day-picker@8.10.1 (requires date-fns 2.x or 3.x)
- All Replit proxy requirements are configured (allowedHosts, proper port binding)
