# 🚀 Quick Deploy to GitHub Pages (Static Only)

## Option 1: Deploy Static Version (No API - Test Data Only)

This is the simplest option. The dashboard will work with test data only.

### Steps:

```bash
cd "/Users/sujaygp/Desktop/performance dashboard"

# Build the app
npm run build

# Deploy to GitHub Pages
npm run deploy
```

**That's it!** Your dashboard will be live at:
```
https://Sujaygp17.github.io/performance-dashboard
```

---

## Option 2: Deploy with API (Requires Backend Server)

For the API integration to work on GitHub Pages, you need a separate backend server.

### Quick Steps:

1. **Deploy backend to Render.com** (see `DEPLOY_TO_RENDER.md`)
2. **Update `.env.production`** with your Render URL
3. **Build and deploy frontend:**
   ```bash
   npm run build
   npm run deploy
   ```

---

## 🎯 Recommended: Deploy Everything to Render

The easiest approach is to deploy both frontend and backend to Render.com together.

See: **`DEPLOY_TO_RENDER.md`** for full instructions.

---

## Current GitHub Pages Status

Your repository is already configured for GitHub Pages:
- Repository: `Sujaygp17/performance-dashboard`
- Homepage: `https://Sujaygp17.github.io/performance-dashboard`

Just run `npm run deploy` to update it!
