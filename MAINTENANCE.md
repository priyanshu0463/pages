# Maintenance Guide - Swiftrack Logistics

A comprehensive guide for maintaining and updating your Swiftrack Logistics website.

## 📋 Table of Contents
- [Regular Maintenance Tasks](#regular-maintenance-tasks)
- [Common Updates](#common-updates)
- [Troubleshooting](#troubleshooting)
- [Performance Monitoring](#performance-monitoring)
- [Security Updates](#security-updates)

## 🔄 Regular Maintenance Tasks

### Monthly Tasks
- [ ] Update dependencies
- [ ] Review analytics data
- [ ] Check for broken links
- [ ] Test on new browser versions
- [ ] Review and respond to user feedback
- [ ] Backup source code

### Quarterly Tasks
- [ ] Review and update content
- [ ] Optimize images
- [ ] Check SEO performance
- [ ] Review accessibility
- [ ] Update testimonials
- [ ] Review color scheme and design

### Annual Tasks
- [ ] Major dependency upgrades
- [ ] Design refresh consideration
- [ ] Content strategy review
- [ ] Performance audit
- [ ] Security audit

## 🔧 Common Updates

### Update Company Information

#### Contact Numbers
**File**: `src/components/Contact.jsx`

```javascript
const contactInfo = {
  phone: {
    details: [
      { label: 'Toll-Free', value: 'YOUR-NEW-NUMBER' },
      { label: 'Customer Support', value: 'YOUR-NEW-NUMBER' },
      // ... update other numbers
    ],
  },
```

#### Email Addresses
**File**: `src/components/Contact.jsx`

```javascript
email: {
  details: [
    { label: 'General Inquiries', value: 'info@yourcompany.com' },
    { label: 'Customer Support', value: 'support@yourcompany.com' },
    // ... update other emails
  ],
},
```

#### Physical Address
**File**: `src/components/Contact.jsx` and `src/components/MapEmbed.jsx`

Update address text and Google Maps embed URL.

### Update Statistics

**File**: `src/components/Hero.jsx`

```javascript
{[
  { value: '500+', label: 'Cities Covered' },  // Update values
  { value: '99.2%', label: 'On-Time Delivery' },
  { value: '1M+', label: 'Daily Shipments' },
].map((stat, index) => (
```

**File**: `src/components/About.jsx` - Same structure

### Add New Service

**File**: `src/components/Services.jsx`

```javascript
const services = [
  // ... existing services
  {
    icon: YourIcon,  // Import from lucide-react
    title: 'Your New Service',
    description: 'Description of your new service...',
    color: 'from-blue-400 to-blue-600',  // Choose gradient
  },
];
```

### Add New Testimonial

**File**: `src/components/Testimonials.jsx`

```javascript
const testimonials = [
  // ... existing testimonials
  {
    name: 'Customer Name',
    designation: 'Job Title',
    company: 'Company Name',
    rating: 5,
    text: 'Their testimonial text...',
    avatar: 'CN',  // Initials
  },
];
```

### Update Footer Links

**File**: `src/components/Footer.jsx`

```javascript
const quickLinks = [
  'Your Link 1',
  'Your Link 2',
  // ... add more links
];

const services = [
  'Your Service 1',
  'Your Service 2',
  // ... add more services
];
```

### Change Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: {
    DEFAULT: '#YourColor',  // Update hex codes
    dark: '#YourDarkShade',
    light: '#YourLightShade',
  },
  accent: {
    DEFAULT: '#YourAccentColor',
    dark: '#YourAccentDark',
    light: '#YourAccentLight',
  },
}
```

### Update Google Maps Location

**File**: `src/components/MapEmbed.jsx`

1. Go to Google Maps
2. Find your location
3. Click Share → Embed a map
4. Copy the iframe URL
5. Replace the `src` in:

```javascript
<iframe
  src="YOUR-NEW-GOOGLE-MAPS-EMBED-URL"
  // ... rest of attributes
/>
```

## 🔍 Dependency Updates

### Check for Updates
```bash
npm outdated
```

### Update All Dependencies
```bash
npm update
```

### Update Specific Package
```bash
npm install package-name@latest
```

### Major Version Updates
```bash
# Check compatibility first!
npm install react@latest react-dom@latest
npm install vite@latest
npm install tailwindcss@latest
```

### After Updates
```bash
# Always test after updates
npm install
npm run build
npm run dev
```

## 🐛 Troubleshooting

### Build Errors

#### Error: Module not found
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### Error: PostCSS configuration
```bash
# Solution: Verify postcss.config.js
# Should contain:
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

#### Error: Tailwind classes not working
```bash
# Solution: Check tailwind.config.js content paths
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### Runtime Errors

#### Animations not working
1. Check Framer Motion is installed: `npm list framer-motion`
2. Verify imports in components
3. Check for JavaScript errors in console

#### Images not loading
1. Verify files are in `public/` folder
2. Check paths in `src/` imports
3. Rebuild: `npm run build`

#### Smooth scroll not working
1. Check `index.css` has scroll-behavior
2. Verify Navbar scroll function
3. Test on different browsers

### Deployment Issues

#### 404 errors on page refresh
Add redirect rules (see DEPLOYMENT.md for platform-specific instructions)

#### Assets not loading on production
1. Check `base` path in `vite.config.js`
2. Verify asset paths are relative
3. Check hosting platform configuration

#### Slow load times
1. Enable compression on hosting platform
2. Optimize images
3. Check CDN configuration

## 📊 Performance Monitoring

### Run Lighthouse Audit
1. Open your site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Click "Generate report"
5. Review scores and suggestions

### Monitor Load Times
```bash
# Test build size
npm run build

# Check bundle analyzer
npm run build -- --report
```

### Optimize Performance

#### Reduce JavaScript Bundle
- Remove unused dependencies
- Use code splitting
- Lazy load components

#### Optimize Images
- Compress before uploading
- Use WebP format
- Add lazy loading

#### Enable Caching
- Configure on hosting platform
- Use CDN
- Set proper cache headers

## 🔒 Security Updates

### Regular Security Checks
```bash
# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Fix breaking changes manually
npm audit fix --force
```

### Best Practices
- Keep dependencies updated
- Use HTTPS always
- Don't commit sensitive data
- Review third-party scripts
- Monitor access logs

## 📝 Content Updates

### Update Text Content
1. Find the component file
2. Locate the text in JSX
3. Update the string
4. Save and test

### Add New Section
1. Create new component in `src/components/`
2. Import in `App.jsx`
3. Add to appropriate position
4. Update navigation if needed

### Remove Section
1. Comment out import in `App.jsx`
2. Comment out component in return
3. Remove from navigation
4. Test thoroughly

## 🧪 Testing Checklist

### Before Deployment
- [ ] Build succeeds without errors
- [ ] All pages/sections load
- [ ] Navigation works
- [ ] Animations are smooth
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Links work correctly
- [ ] Forms submit (if applicable)
- [ ] Images load properly
- [ ] Google Maps works

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Device Testing
- [ ] Mobile phone (portrait)
- [ ] Mobile phone (landscape)
- [ ] Tablet (portrait)
- [ ] Tablet (landscape)
- [ ] Laptop
- [ ] Desktop

## 📈 Analytics Setup

### Google Analytics
1. Get tracking ID
2. Add to `index.html` before `</head>`
3. Deploy changes
4. Verify tracking

### Monitor These Metrics
- Page views
- Bounce rate
- Average session duration
- Mobile vs desktop traffic
- Most viewed sections
- User flow
- Conversion rates (if CTAs tracked)

## 💾 Backup Strategy

### What to Backup
- Source code (use Git)
- Build configuration files
- Documentation
- Custom assets
- Environment variables

### Backup Methods
1. **Git Repository** (Recommended)
   ```bash
   git add .
   git commit -m "Backup: [date]"
   git push
   ```

2. **Local Backup**
   - Zip entire project folder
   - Store in multiple locations
   - Keep dated copies

3. **Cloud Backup**
   - GitHub/GitLab
   - Bitbucket
   - Cloud storage

## 🔄 Update Workflow

### Standard Update Process
1. Create backup/branch
2. Make changes
3. Test locally (`npm run dev`)
4. Build for production (`npm run build`)
5. Test production build (`npm run preview`)
6. Deploy
7. Test live site
8. Monitor for issues

### For Major Changes
1. Create feature branch
2. Implement changes
3. Extensive testing
4. Peer review (if team)
5. Merge to main
6. Deploy to staging first
7. Final testing
8. Deploy to production

## 📞 Support Resources

### Documentation
- React: https://react.dev/
- Vite: https://vite.dev/
- Tailwind CSS: https://tailwindcss.com/
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/

### Community
- Stack Overflow
- GitHub Issues
- Reddit (r/reactjs, r/webdev)
- Discord communities

## ⚠️ Important Notes

### Don't Forget To
- Test after every change
- Keep dependencies updated
- Monitor performance
- Backup regularly
- Document custom changes
- Keep documentation updated

### Avoid
- Making changes directly in production
- Updating all dependencies at once
- Ignoring console warnings
- Skipping testing
- Committing sensitive data
- Breaking responsive design

## 🎯 Maintenance Schedule Template

### Weekly
- Monday: Check analytics
- Wednesday: Review user feedback
- Friday: Quick health check

### Monthly
- First week: Dependency check
- Second week: Content review
- Third week: Performance check
- Fourth week: Security audit

### Quarterly
- Q1: Design review
- Q2: Major updates
- Q3: Content refresh
- Q4: Year-end optimization

---

## 📝 Change Log Template

Keep track of changes:

```markdown
## [Date] - [Version]
### Added
- New feature X

### Changed
- Updated component Y

### Fixed
- Bug in section Z

### Removed
- Deprecated feature A
```

---

**Keep your site running smoothly!** 🚀

For urgent issues, refer to the Troubleshooting section above.
