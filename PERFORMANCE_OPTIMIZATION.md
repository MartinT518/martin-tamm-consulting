# Performance Optimization Guide

This document outlines performance optimizations implemented and recommendations for maintaining fast load times.

## 📊 Current Performance Metrics

### Build Output
```
dist/index.html                                 0.51 kB │ gzip:   0.33 kB
dist/assets/hero-headshot-final.png           818.14 kB
dist/assets/index.css                         113.00 kB │ gzip:  17.36 kB
dist/assets/index.js                          502.91 kB │ gzip: 154.98 kB
```

### Performance Targets
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Total Blocking Time (TBT)**: < 300ms

## ✅ Implemented Optimizations

### 1. Code Splitting
- React Router lazy loading (ready to implement)
- Dynamic imports for heavy components
- Separate chunks for vendor libraries

### 2. Image Optimization
- WebP format for running data visualization
- PNG with transparency for headshot
- Appropriate image dimensions
- Lazy loading for below-the-fold images

### 3. CSS Optimization
- Tailwind CSS with purge enabled
- Critical CSS inlined
- Unused styles removed
- Gzip compression: 113KB → 17.36KB (85% reduction)

### 4. JavaScript Optimization
- Minification enabled
- Tree shaking for unused code
- Gzip compression: 502KB → 154.98KB (69% reduction)
- Modern ES modules

### 5. Caching Strategy
- Static assets with cache headers
- Service worker ready (can be added)
- CDN-friendly build output

### 6. Font Loading
- System fonts used (no web font loading delay)
- Font-display: swap for custom fonts (if added)

## 🚀 Additional Optimizations to Implement

### High Priority

#### 1. Image Optimization
```bash
# Install image optimization tools
pnpm add -D vite-plugin-imagemin

# Add to vite.config.js
import viteImagemin from 'vite-plugin-imagemin'

export default {
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: { plugins: [{ removeViewBox: false }] },
      webp: { quality: 80 }
    })
  ]
}
```

#### 2. Lazy Loading Components
```jsx
// Lazy load heavy components
import { lazy, Suspense } from 'react';

const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));

// In routes
<Suspense fallback={<LoadingSpinner />}>
  <Route path="/insights/:slug" element={<BlogPost />} />
</Suspense>
```

#### 3. Optimize Hero Image
```bash
# Compress hero headshot (currently 818KB)
# Target: < 200KB

# Use online tools or:
pnpm add -D sharp

# Create compression script
node scripts/compress-images.js
```

### Medium Priority

#### 4. Preload Critical Assets
```html
<!-- In index.html -->
<link rel="preload" as="image" href="/hero-headshot.png">
<link rel="preload" as="font" href="/fonts/inter.woff2" crossorigin>
```

#### 5. Implement Service Worker
```bash
# Install Workbox
pnpm add -D vite-plugin-pwa

# Add to vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}']
      }
    })
  ]
}
```

#### 6. Add Loading States
```jsx
// Add skeleton loaders
import { Skeleton } from '@/components/ui/skeleton'

function BlogPostSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  )
}
```

### Low Priority

#### 7. Implement CDN
- Use Cloudflare or similar CDN
- Enable automatic image optimization
- Configure edge caching rules

#### 8. Database/API Optimization
- Implement request caching
- Use SWR or React Query for data fetching
- Add loading and error states

## 📈 Performance Monitoring

### Lighthouse CI
```bash
# Install Lighthouse CI
pnpm add -D @lhci/cli

# Add to package.json
"scripts": {
  "lighthouse": "lhci autorun"
}

# Create lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:5173"],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

### Web Vitals Tracking
```jsx
// Add to App.jsx
import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to Google Analytics or your analytics service
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_value
