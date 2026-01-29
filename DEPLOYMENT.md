# Deployment Guide for Two-Ex Website

## Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest way to deploy a Vite/React app.

### Steps:

1. **Install Vercel CLI** (first time only):
```bash
npm install -g vercel
```

2. **Deploy from project directory**:
```bash
cd ~/two-ex
vercel
```

3. **Follow the prompts**:
   - Login to Vercel (will open browser)
   - Confirm project settings
   - Wait for deployment to complete

4. **Get your live URL**: Vercel will provide a URL like `https://two-ex.vercel.app`

### For Production Deployment:
```bash
vercel --prod
```

### Custom Domain (Optional):
After deploying, you can add a custom domain in the Vercel dashboard.

---

## Option 2: Netlify

### Steps:

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build the project**:
```bash
npm run build
```

3. **Deploy**:
```bash
netlify deploy
```

4. **Deploy to production**:
```bash
netlify deploy --prod
```

---

## Option 3: GitHub Pages

### Steps:

1. **Install gh-pages**:
```bash
npm install -D gh-pages
```

2. **Add to package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/two-ex"
}
```

3. **Update vite.config.js**:
```javascript
export default {
  base: '/two-ex/'
}
```

4. **Deploy**:
```bash
npm run deploy
```

---

## Build Optimization Tips

### Before deploying:

1. **Optimize images**:
   - Use WebP format for better compression
   - Compress JPGs (tools: TinyPNG, Squoosh)
   - Keep images under 500KB each

2. **Test production build locally**:
```bash
npm run build
npm run preview
```

3. **Check bundle size**:
```bash
npm run build
# Check dist/ folder size
```

### Expected bundle sizes:
- JavaScript: ~500KB (includes React, Recharts, etc.)
- CSS: ~50KB (Tailwind)
- Total: <1MB (excluding images)

---

## Environment Variables (if needed)

If you add any API keys or secrets:

1. **Create `.env` file** (gitignored):
```
VITE_API_KEY=your_key_here
```

2. **Add to Vercel/Netlify dashboard** under Environment Variables

3. **Access in code**:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections are visible
- [ ] Countdown timer is working
- [ ] Navigation buttons work
- [ ] Photos load (or placeholder message shows)
- [ ] Responsive on mobile/tablet
- [ ] Easter eggs work (Ewok, Konami code)
- [ ] YouTube videos play
- [ ] Charts render correctly

---

## Troubleshooting

### Issue: 404 on page refresh
**Solution**: Configure redirects in Vercel/Netlify for SPA routing.

Vercel: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Netlify: Create `public/_redirects`:
```
/*    /index.html   200
```

### Issue: Images not loading
**Solution**: Check image paths use `/assets/...` (not `./assets/...`)

### Issue: Tailwind styles not applied
**Solution**: Ensure `@tailwind` directives are in `src/index.css`

---

## Quick Deploy Commands

### Vercel:
```bash
vercel --prod
```

### Netlify:
```bash
netlify deploy --prod
```

### Update live site:
Just run the deploy command again! Changes will be live in ~1 minute.

---

GO HAWKS! 🏈 Your Two-Ex website is ready to share!
