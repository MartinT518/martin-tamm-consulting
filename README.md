# Martin Tamm - AI & Data Analysis Consulting Website

A professional, high-converting personal consulting website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm (or npm/yarn)

### Local Development
```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## 📦 Deployment Options

### Option 1: Deploy to Netlify (100% Free)

1. **Via Netlify CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (from project root)
netlify deploy --prod --dir=dist
```

2. **Via Netlify UI:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder
   - Your site will be live in seconds!

3. **Via GitHub (Continuous Deployment):**
   - Push this repo to GitHub
   - Connect your GitHub repo to Netlify
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Netlify will auto-deploy on every push!

### Option 2: Deploy to Vercel (100% Free)

1. **Via Vercel CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

2. **Via Vercel UI:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect React and deploy!

### Option 3: Deploy to GitHub Pages (100% Free)

1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and `/dist` folder
4. Your site will be live at `username.github.io/repo-name`

### Option 4: Deploy to Cloudflare Pages (100% Free)

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Build command: `pnpm run build`
4. Output directory: `dist`
5. Deploy!

## 🎨 Features

- ✅ Professional hero section with custom headshot and neural network effect
- ✅ Pain points section highlighting business challenges
- ✅ Company logos (Cybernetica, Piletilevi, Ericsson, Icefire, Finestmedia)
- ✅ Case studies with measurable results
- ✅ Personal story section with running analytics
- ✅ Contact form for lead capture
- ✅ Fully responsive design
- ✅ Smooth animations with Framer Motion
- ✅ Dark theme with electric blue and green accents

## 📧 Contact Information

- **Email:** martin.t-amm@live.com
- **Phone:** +372 56808182

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📁 Project Structure

```
consulting-website/
├── dist/                  # Production build (deploy this folder)
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # React components
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## 🔧 Customization

### Update Content
Edit `src/App.jsx` to modify:
- Hero headline and subheadline
- Pain points
- Case studies
- Contact information
- Footer content

### Update Styling
- Colors are defined in `src/App.css`
- Primary dark blue: `#0A192F`
- Secondary dark gray: `#111827`
- Accent blue: `#6366F1`
- Accent green: `#34D399`

### Add New Images
1. Place images in `src/assets/`
2. Import in `src/App.jsx`
3. Use in your components

## 📝 License

© 2025 Martin Tamm. All rights reserved.

## 🆘 Support

For questions or issues, contact martin.t-amm@live.com

---

**Built with ❤️ for converting data into revenue**
