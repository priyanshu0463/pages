# Troubleshooting Guide

## 🎨 No Colors / Site Appears Plain White

If the website appears plain white with no colors, try these solutions:

### Solution 1: Hard Refresh Browser (Most Common Fix)
**Windows/Linux**:
- Press `Ctrl + Shift + R` or `Ctrl + F5`

**Mac**:
- Press `Cmd + Shift + R`

This clears the browser cache and reloads fresh CSS.

### Solution 2: Restart Development Server
1. Stop the current server (press `Ctrl + C` in terminal)
2. Restart: `npm run dev`
3. Hard refresh your browser

### Solution 3: Clear Node Modules and Rebuild
```bash
# Stop the dev server first (Ctrl + C)

# Delete build artifacts and node_modules
rmdir /s /q node_modules dist
del package-lock.json

# Reinstall everything
npm install

# Start fresh
npm run dev
```

### Solution 4: Check Browser Console
1. Open browser DevTools (Press `F12`)
2. Go to Console tab
3. Look for any red error messages
4. Check if CSS file is loaded in Network tab

### Solution 5: Clear Browser Cache Manually
**Chrome**:
1. Press `F12` to open DevTools
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

**Firefox**:
1. Press `Ctrl + Shift + Delete`
2. Select "Cache"
3. Click "Clear Now"

### Solution 6: Try Different Browser
Sometimes a different browser helps identify if it's a caching issue:
- Try Chrome if you're on Firefox
- Try Edge if you're on Chrome
- Try Firefox if you're on Edge

### Solution 7: Check Port
Make sure you're accessing the correct port:
- Default: `http://localhost:5173/`
- Not: `http://localhost:3000/` or other ports

### Solution 8: Build and Preview
Sometimes the dev server has issues. Try the production build:
```bash
npm run build
npm run preview
```

Then visit the preview URL (usually `http://localhost:4173/`)

## 🔧 Animations Not Working

### Check Framer Motion Installation
```bash
npm list framer-motion
```

If not installed or wrong version:
```bash
npm install framer-motion@latest
```

### Restart Server
```bash
# Stop server (Ctrl + C)
npm run dev
```

## ⚠️ Build Errors

### "Cannot find module"
```bash
npm install
```

### "PostCSS Error"
Verify `postcss.config.js` contains:
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### "Tailwind CSS Error"
Check `src/index.css` starts with:
```css
@import "tailwindcss";

@theme {
  --color-primary: #0a1f44;
  /* ... other colors */
}
```

## 📱 Mobile View Issues

### Site Not Responsive
1. Open DevTools (`F12`)
2. Click device toolbar icon (phone/tablet icon)
3. Select a mobile device
4. Refresh page

### Touch Events Not Working
Try on actual mobile device or different emulator.

## 🌐 Deployment Issues

### 404 on Refresh
Add platform-specific redirect rules (see DEPLOYMENT.md).

### Assets Not Loading
1. Check `vite.config.js` base path
2. Verify all paths are relative
3. Check hosting platform configuration

### Slow Loading
1. Enable compression on hosting platform
2. Check if CDN is enabled
3. Optimize images

## 🐛 JavaScript Errors

### "React is not defined"
```bash
npm install react@latest react-dom@latest
```

### "Failed to compile"
1. Check for syntax errors in components
2. Verify all imports are correct
3. Check browser console for details

## 💻 Development Server Won't Start

### Port Already in Use
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or use different port
npm run dev -- --port 3000
```

### Node Version Issues
Check Node version:
```bash
node --version
```

Should be v18+ for best compatibility.

## 🔍 Still Having Issues?

### Check These Files
1. `package.json` - Dependencies correct?
2. `vite.config.js` - Plugins configured?
3. `tailwind.config.js` - Colors defined?
4. `src/index.css` - Tailwind imported?
5. `src/main.jsx` - CSS imported?

### Verify Installation
```bash
# Check all dependencies
npm list

# Look for missing packages
npm install
```

### Start From Scratch
If nothing works:
```bash
# Backup your changes to components if you made any
# Then:
rmdir /s /q node_modules dist
del package-lock.json
npm install
npm run dev
```

## 📞 Common Error Messages

### "Cannot find module '@tailwindcss/vite'"
```bash
npm install -D @tailwindcss/vite
```

### "Cannot find module '@tailwindcss/postcss'"
```bash
npm install -D @tailwindcss/postcss
```

### "Cannot find module 'framer-motion'"
```bash
npm install framer-motion
```

### "Cannot find module 'lucide-react'"
```bash
npm install lucide-react
```

## ✅ Quick Check Command
Run this to verify everything:
```bash
npm run build
```

If build succeeds, everything is installed correctly.

## 🎯 Most Common Issue

**90% of "no colors" issues are solved by**:
1. Stopping the dev server (`Ctrl + C`)
2. Running `npm run dev` again
3. Hard refreshing browser (`Ctrl + Shift + R`)

---

If you're still experiencing issues after trying these solutions, check:
- Browser console for errors
- Network tab for failed requests
- Terminal for build errors
