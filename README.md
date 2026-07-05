# Swiftrack Logistics - Indian Courier & Logistics Website

A fully responsive, animated frontend-only website for an Indian courier and logistics company. Built with modern web technologies for smooth user experience across all devices.

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite 8** - Build tool & dev server
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Smooth animations & scroll effects
- **Lucide React** - Modern icon library

## 🎨 Design Features

- **Mobile-First Design** - Fully responsive across mobile, tablet, and desktop
- **Smooth Animations** - Scroll-triggered animations and micro-interactions
- **Indian-Themed** - Deep navy blue + saffron orange color palette
- **Modern UI/UX** - Clean, professional interface with intuitive navigation

## 📋 Sections

1. **Sticky Navbar** - Logo, navigation links, CTA button, mobile hamburger menu
2. **Hero Section** - Bold headline, CTAs, delivery stats
3. **About Us** - Company story with key statistics
4. **Our Services** - 6 specialty service cards with icons
5. **Why Choose Us** - 6 key benefits with icons
6. **Mission & Vision** - Two-column layout with company values
7. **India Coverage Map** - Interactive map showing pan-India delivery network
8. **Customer Testimonials** - Auto-rotating carousel with 4 reviews
9. **Contact Section** - Tabbed interface (Phone, Email, Address)
10. **Office Location** - Google Maps embed with address details
11. **Footer** - Company info, quick links, services, newsletter signup

## 🎯 Key Features

- **Scroll-triggered animations** - Elements fade and slide in as you scroll
- **Smooth anchor-link scrolling** - Navigation links smoothly scroll to sections
- **Hover effects** - Cards lift and scale on hover
- **Testimonial carousel** - Auto-advance with manual controls
- **Animated tab switcher** - Smooth sliding indicator in contact section
- **Mobile drawer menu** - Slide-in navigation for mobile devices
- **Sticky navbar** - Becomes solid with blur effect on scroll

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development

The development server will start at `http://localhost:5173/`

## 📦 Production Build

The production build will be generated in the `dist/` folder:
- Optimized assets
- Minified CSS & JavaScript
- Lazy-loaded images

## 🎨 Color Palette

- **Primary Navy**: `#0A1F44`
- **Accent Orange**: `#FF6B35`
- **White**: `#FFFFFF`
- **Gray Tones**: Various shades for text and backgrounds

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#0A1F44',
    dark: '#051229',
    light: '#1a3a6b',
  },
  accent: {
    DEFAULT: '#FF6B35',
    dark: '#e55a2b',
    light: '#ff8a5c',
  },
}
```

### Update Content
All content is in component files under `src/components/`:
- Edit text, stats, testimonials directly in each component
- Update service descriptions in `Services.jsx`
- Modify testimonials in `Testimonials.jsx`

### Update Google Maps
In `MapEmbed.jsx`, replace the iframe `src` with your location's embed URL

## 📄 License

This is a client project. All rights reserved.

## 👨‍💻 Development Notes

- No backend or API integration (frontend only)
- All forms are UI-only (no submission handling)
- Google Maps embed uses placeholder coordinates
- Images use placeholder/stock references
- All content is hardcoded (no CMS)

## 🚀 Performance

- Optimized animations using `transform` and `opacity`
- Lazy loading for below-fold content
- Efficient component rendering
- Minimal bundle size with tree-shaking

## 📞 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ for Swiftrack Logistics**
