# Quick Start Guide - Swiftrack Logistics

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The site will be available at: `http://localhost:5173/`

### 3. Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 📂 Project Structure

```
swiftrack-logistics/
├── src/
│   ├── components/          # All React components
│   │   ├── Navbar.jsx       # Sticky navigation bar
│   │   ├── Hero.jsx         # Hero section with CTAs
│   │   ├── About.jsx        # About section with stats
│   │   ├── Services.jsx     # Service cards grid
│   │   ├── WhyUs.jsx        # Benefits section
│   │   ├── MissionVision.jsx # Mission & Vision
│   │   ├── CoverageMap.jsx  # India map with coverage
│   │   ├── Testimonials.jsx # Customer reviews carousel
│   │   ├── Contact.jsx      # Tabbed contact section
│   │   ├── MapEmbed.jsx     # Google Maps integration
│   │   └── Footer.jsx       # Site footer
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies

```

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#0A1F44',  // Main navy blue
    dark: '#051229',
    light: '#1a3a6b',
  },
  accent: {
    DEFAULT: '#FF6B35',  // Saffron orange
    dark: '#e55a2b',
    light: '#ff8a5c',
  },
}
```

### Update Company Name
Replace "Swiftrack" in all component files:
- `Navbar.jsx` - Logo text
- `Hero.jsx` - Hero title
- `Footer.jsx` - Footer text
- `About.jsx` - About heading
- Other sections as needed

### Modify Services
Edit `src/components/Services.jsx`:
```javascript
const services = [
  {
    icon: Zap,
    title: 'Your Service Name',
    description: 'Your service description',
    color: 'from-orange-400 to-orange-600',
  },
  // Add more services...
];
```

### Update Testimonials
Edit `src/components/Testimonials.jsx`:
```javascript
const testimonials = [
  {
    name: 'Customer Name',
    designation: 'Position',
    company: 'Company Name',
    rating: 5,
    text: 'Testimonial text...',
    avatar: 'CN', // Initials
  },
  // Add more testimonials...
];
```

### Change Contact Information
Edit `src/components/Contact.jsx`:
```javascript
const contactInfo = {
  phone: {
    details: [
      { label: 'Toll-Free', value: 'YOUR-NUMBER' },
      // Update other numbers...
    ],
  },
  // Update email and address sections...
};
```

### Update Google Maps Location
Edit `src/components/MapEmbed.jsx`:
1. Get your Google Maps embed code
2. Replace the iframe `src` URL
3. Update the address overlay text

## 🔧 Available Scripts

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## 🌐 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist/` folder to Netlify
3. Your site is live!

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📱 Testing on Mobile

### Using Vite Dev Server
1. Get your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Access from mobile: `http://YOUR-IP:5173`

### Using Vite Network Option
```bash
npm run dev -- --host
```
Vite will show network URLs you can access from mobile devices.

## 🐛 Troubleshooting

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm run build -- --force`

### Styles Not Updating
- Restart dev server
- Clear browser cache
- Check Tailwind config syntax

### Animations Not Working
- Check Framer Motion is installed: `npm list framer-motion`
- Verify scroll-behavior in CSS

## 💡 Tips

- Use browser DevTools to test responsive design
- Enable "Slow 3G" network throttling to test loading
- Test animations on actual mobile devices
- Use Lighthouse for performance audits
- Keep components focused and reusable

## 📚 Documentation Links

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🆘 Need Help?

Check these common issues:
1. **Port already in use**: Change port in `vite.config.js`
2. **Slow build**: Reduce animation complexity
3. **Images not loading**: Check public folder paths
4. **Mobile menu not working**: Verify z-index values

---

**Happy Coding! 🚀**
