# Deployment Guide - Swiftrack Logistics

Complete guide to deploy your Swiftrack Logistics website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All content is updated with actual information
- [ ] Google Maps location is set correctly
- [ ] Contact information is accurate
- [ ] Company name and branding is finalized
- [ ] All images are optimized
- [ ] Build succeeds without errors: `npm run build`
- [ ] Site tested on mobile, tablet, and desktop
- [ ] All links are working
- [ ] SEO metadata is complete

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

#### Method A: Drag & Drop
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder to the upload area
4. Your site is live instantly!
5. Note the provided URL (e.g., `random-name-123.netlify.app`)

#### Method B: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Choose your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

#### Custom Domain on Netlify
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic and free)

---

### Option 2: Vercel

#### Method A: Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```
3. Follow the prompts
4. Your site is deployed!

#### Method B: Vercel Git Integration
1. Go to [Vercel](https://vercel.com/)
2. Click "New Project"
3. Import your Git repository
4. Vercel auto-detects Vite configuration
5. Click "Deploy"

#### Custom Domain on Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS as instructed
4. SSL is automatic

---

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/swiftrack-logistics",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/swiftrack-logistics/',
     plugins: [react(), tailwindcss()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

---

### Option 4: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```
   - Choose "Use an existing project" or create new
   - Set public directory to: `dist`
   - Configure as single-page app: `No`
   - Don't overwrite index.html

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

### Option 5: AWS S3 + CloudFront

#### Setup S3 Bucket
1. Create S3 bucket in AWS Console
2. Enable static website hosting
3. Set bucket policy for public read:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::your-bucket-name/*"
     }]
   }
   ```

#### Deploy Files
1. Build project:
   ```bash
   npm run build
   ```
2. Upload `dist/` contents to S3 bucket
3. Note the S3 website endpoint

#### Setup CloudFront (Optional - for HTTPS)
1. Create CloudFront distribution
2. Set origin to S3 website endpoint
3. Configure SSL certificate
4. Update DNS to point to CloudFront

---

### Option 6: DigitalOcean App Platform

1. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Choose your Git repository
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Choose plan (Static Site - $0/month for starter)
6. Launch app

---

### Option 7: Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect Git repository
4. Configure build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Deploy

---

## 🔧 Build Configuration

### Environment Variables
If you need environment variables:

1. Create `.env` file:
   ```env
   VITE_GOOGLE_MAPS_KEY=your_api_key_here
   VITE_API_URL=https://api.example.com
   ```

2. Access in code:
   ```javascript
   const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY
   ```

3. Configure on hosting platform (each has its own method)

### Base URL Configuration
If deploying to a subdirectory, update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/subdirectory/',
  plugins: [react(), tailwindcss()],
})
```

---

## 🌐 Domain Configuration

### DNS Settings for Custom Domain
Typical DNS records needed:

#### For Netlify/Vercel (A Records)
```
Type: A
Name: @
Value: [Provided IP Address]

Type: CNAME
Name: www
Value: [Your site URL]
```

#### SSL Certificate
- Most platforms provide free SSL automatically
- Verify HTTPS is enabled after domain connection
- Update all links to use HTTPS

---

## 📊 Post-Deployment Checklist

After deployment:
- [ ] Visit your live site URL
- [ ] Test all navigation links
- [ ] Verify mobile responsiveness
- [ ] Check animations are working
- [ ] Test contact forms (if integrated)
- [ ] Verify Google Maps loads correctly
- [ ] Test on different browsers
- [ ] Check page load speed
- [ ] Verify SEO metadata
- [ ] Set up Google Analytics (optional)
- [ ] Test social media sharing
- [ ] Configure 404 page (if needed)

---

## 🔍 Performance Optimization

### After Deployment
1. **Test with Lighthouse**
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Aim for 90+ scores

2. **Optimize Images**
   - Compress images before uploading
   - Use WebP format if possible
   - Add lazy loading attributes

3. **Enable Compression**
   - Most platforms enable Gzip/Brotli automatically
   - Verify in Network tab

4. **Setup CDN**
   - Platforms like Netlify/Vercel include CDN
   - For others, consider Cloudflare CDN

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors on Refresh
Configure platform for SPA routing:
- **Netlify**: Add `netlify.toml`:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```
- **Vercel**: Add `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```

### Assets Not Loading
- Check `base` path in `vite.config.js`
- Verify asset paths are relative
- Check browser console for errors

### Slow Load Times
- Enable compression on hosting platform
- Optimize images
- Check bundle size: `npm run build -- --report`
- Consider code splitting

---

## 📈 Monitoring & Analytics

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Performance Monitoring
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor with [GTmetrix](https://gtmetrix.com/)
- Check uptime with [UptimeRobot](https://uptimerobot.com/)

---

## 🎉 You're Live!

Your Swiftrack Logistics website is now deployed and accessible to the world!

**Next Steps:**
1. Share the URL with stakeholders
2. Monitor site performance
3. Gather user feedback
4. Plan for regular updates
5. Set up automated deployments (optional)

---

**Need Help?**
- Check platform-specific documentation
- Review build logs for errors
- Test locally first: `npm run preview`
- Verify all dependencies are in `package.json`

**Happy Deploying! 🚀**
