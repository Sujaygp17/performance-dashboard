# Deploying to GitHub Pages + Render

## Overview

Since GitHub Pages only hosts static sites, we need:
1. **Frontend (React)** → GitHub Pages
2. **Backend (Proxy Server)** → Render.com (or similar)

---

## Step 1: Deploy Proxy Server to Render.com

### A. Prepare the server for deployment

1. Create a `render.yaml` file (already created below)
2. Push your code to GitHub
3. Deploy on Render

### B. Sign up for Render.com

1. Go to https://render.com
2. Sign up with your GitHub account (free)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository

### C. Configure the Web Service

- **Name**: `performance-dashboard-api`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- **Instance Type**: `Free`

### D. Add Environment Variables (if needed)

No environment variables needed for the proxy server.

### E. Deploy!

Click "Create Web Service" and wait for deployment (2-3 minutes).

You'll get a URL like: `https://performance-dashboard-api.onrender.com`

---

## Step 2: Update React App for Production

### A. Update the API URL

Once you have your Render URL, update `.env.production`:

```
REACT_APP_API_URL=https://performance-dashboard-api.onrender.com/api
```

### B. Build and Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

---

## Alternative: Deploy Both to Render (Easier!)

If you want everything on Render:

1. Deploy the Node.js app (both frontend and backend together)
2. Modify `server.js` to serve the React build
3. Single deployment, single URL

See `DEPLOY_TO_RENDER.md` for this approach.

---

## Alternative Free Hosting Options

### For Backend (Proxy Server):
- **Render.com** (Free tier, recommended)
- **Railway.app** (Free $5/month credit)
- **Fly.io** (Free tier)
- **Cyclic.sh** (Free tier)
- **Glitch.com** (Free, may sleep)

### For Frontend:
- **GitHub Pages** (Free, current setup)
- **Vercel** (Free tier)
- **Netlify** (Free tier)

---

## Quick Deploy to Render (Recommended)

I'll create the necessary files for you now...
