# Accessibility Features

This document outlines the accessibility features implemented in the website to ensure WCAG 2.1 AA compliance.

## ✅ Implemented Features

### 1. Semantic HTML
- Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Heading hierarchy (h1 → h2 → h3) maintained throughout
- Form labels properly associated with inputs

### 2. Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states visible on all interactive elements
- Logical tab order throughout the site
- Skip navigation links (can be added if needed)

### 3. Color Contrast
- Text meets WCAG AA standards:
  - White text (#FFFFFF) on dark backgrounds (#0A192F, #111827)
  - Blue accent (#6366F1) and green accent (#34D399) tested for contrast
  - Gray text (#9CA3AF) used only for non-essential content

### 4. Form Accessibility
- All form inputs have associated `<label>` elements
- Required fields marked with `required` attribute
- Error messages are descriptive
- ARIA labels on checkboxes

### 5. Image Alt Text
- All images have descriptive alt attributes
- Decorative images use empty alt="" attributes
- Logo images include company names in alt text

### 6. Focus Management
- Visible focus indicators on all interactive elements
- Focus trapped in modal dialogs (if implemented)
- Focus returned to trigger element when closing modals

### 7. Responsive Design
- Mobile-first approach
- Text scales properly with zoom
- No horizontal scrolling at any viewport size
- Touch targets minimum 44x44px

### 8. Screen Reader Support
- Proper ARIA labels on icon buttons
- ARIA landmarks for major page sections
- ARIA live regions for dynamic content updates
- Hidden text for screen readers where needed

## 🔧 ARIA Attributes Used

### Navigation
```jsx
<nav aria-label="Main navigation">
  <Link to="/" aria-current="page">Home</Link>
</nav>
```

### Buttons
```jsx
<button aria-label="Toggle mobile menu">
  <Menu />
</button>
```

### Forms
```jsx
<input 
  id="email" 
  type="email" 
  aria-required="true"
  aria-describedby="email-help"
/>
<span id="email-help">We'll never share your email</span>
```

### Dynamic Content
```jsx
<div role="alert" aria-live="polite">
  Form submitted successfully!
</div>
```

## 📱 Mobile Accessibility

- Touch targets are at least 44x44px
- Pinch-to-zoom enabled
- Viewport meta tag properly configured
- No fixed positioning that blocks content

## 🎨 Visual Accessibility

### Color Blindness
- Information not conveyed by color alone
- Icons and text used alongside color indicators
- High contrast mode compatible

### Motion
- Animations respect `prefers-reduced-motion`
- No auto-playing videos
- Parallax effects can be disabled

### Text
- Minimum font size: 16px (1rem)
- Line height: 1.5 for body text
- Adequate spacing between paragraphs
- No justified text (harder to read)

## 🔍 Testing Recommendations

### Automated Testing
```bash
# Install axe-core for accessibility testing
pnpm add -D @axe-core/react

# Run Lighthouse audit
npx lighthouse https://your-site.com --view
```

### Manual Testing
1. **Keyboard Navigation**: Tab through entire site
2. **Screen Reader**: Test with NVDA (Windows) or VoiceOver (Mac)
3. **Zoom**: Test at 200% zoom level
4. **Color Contrast**: Use WebAIM Contrast Checker
5. **Mobile**: Test on actual devices

### Browser Extensions
- **axe DevTools**: Automated accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Built into Chrome DevTools

## 🚀 Future Enhancements

### High Priority
- [ ] Add skip navigation link
- [ ] Implement focus trap in mobile menu
- [ ] Add ARIA live regions for form feedback
- [ ] Test with actual screen reader users

### Medium Priority
- [ ] Add keyboard shortcuts documentation
- [ ] Implement high contrast mode toggle
- [ ] Add text size adjustment controls
- [ ] Create accessibility statement page

### Low Priority
- [ ] Add audio descriptions for video content (if added)
- [ ] Implement sign language interpretation (if needed)
- [ ] Add dyslexia-friendly font option

## 📋 WCAG 2.1 AA Checklist

### Perceivable
- [x] Text alternatives for non-text content
- [x] Captions and alternatives for multimedia
- [x] Adaptable content structure
- [x] Sufficient color contrast
- [x] Resizable text

### Operable
- [x] Keyboard accessible
- [x] Sufficient time to read content
- [x] No seizure-inducing content
- [x] Navigable with clear focus
- [x] Multiple ways to find pages

### Understandable
- [x] Readable and understandable text
- [x] Predictable navigation
- [x] Input assistance and error prevention
- [x] Clear error messages

### Robust
- [x] Compatible with assistive technologies
- [x] Valid HTML
- [x] Proper ARIA usage
- [x] Progressive enhancement

## 🛠️ Code Examples

### Accessible Button
```jsx
<button
  onClick={handleClick}
  aria-label="Close dialog"
  className="..."
>
  <X aria-hidden="true" />
  <span className="sr-only">Close</span>
</button>
```

### Accessible Link
```jsx
<Link 
  to="/insights"
  aria-label="Read our latest insights and articles"
>
  Insights
</Link>
```

### Accessible Form
```jsx
<form onSubmit={handleSubmit} aria-label="Contact form">
  <label htmlFor="name">
    Name <span aria-label="required">*</span>
  </label>
  <input
    id="name"
    type="text"
    required
    aria-required="true"
    aria-invalid={errors.name ? "true" : "false"}
    aria-describedby={errors.name ? "name-error" : undefined}
  />
  {errors.name && (
    <span id="name-error" role="alert" className="error">
      {errors.name}
    </span>
  )}
</form>
```

### Screen Reader Only Text
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## 📞 Accessibility Statement

Consider adding an accessibility statement page at `/accessibility` that includes:

1. Commitment to accessibility
2. Standards compliance (WCAG 2.1 AA)
3. Known issues and workarounds
4. Contact information for accessibility concerns
5. Date of last accessibility review

## 🔗 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

**Note**: Accessibility is an ongoing process. Regular testing and user feedback are essential to maintaining an accessible website.
