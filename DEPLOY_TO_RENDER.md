# 🚀 Deploy to Render.com (FREE)

## Why Render?
- ✅ Free tier available
- ✅ Hosts both frontend and backend together
- ✅ Auto-deploys from GitHub
- ✅ HTTPS included
- ✅ No credit card required

---

## 📋 Step-by-Step Deployment

### Step 1: Prepare Your Code

The code is already prepared! Just need to commit and push to GitHub.

```bash
cd "/Users/sujaygp/Desktop/performance dashboard"

# Add all files
git add .

# Commit
git commit -m "Add API integration with proxy server"

# Push to GitHub
git push origin main
```

---

### Step 2: Sign Up for Render

1. Go to https://render.com
2. Click **"Get Started"**
3. Sign up with **GitHub** (recommended)
4. Authorize Render to access your repositories

---

### Step 3: Create New Web Service

1. Click **"New +"** button (top right)
2. Select **"Web Service"**
3. Choose your repository: **`map_test`** (or `performance-dashboard`)
4. Click **"Connect"**

---

### Step 4: Configure the Service

Fill in these settings:

**Name:** `performance-dashboard` (or any name you like)

**Region:** Choose closest to you (e.g., Oregon, Frankfurt)

**Branch:** `main`

**Root Directory:** Leave empty

**Environment:** `Node`

**Build Command:** 
```
npm install && npm run build
```

**Start Command:** 
```
node server-production.js
```

**Instance Type:** **Free** (select this!)

---

### Step 5: Add Environment Variable

Click **"Add Environment Variable"**:

- **Key:** `NODE_ENV`
- **Value:** `production`

---

### Step 6: Deploy!

1. Click **"Create Web Service"**
2. Wait 3-5 minutes for deployment
3. You'll get a URL like: `https://performance-dashboard-abcd.onrender.com`

---

### Step 7: Update API URL (Optional for GitHub Pages)

If you also want to deploy to GitHub Pages:

1. Edit `.env.production`:
   ```
   REACT_APP_API_URL=https://performance-dashboard-abcd.onrender.com/api
   ```

2. Build and deploy to GitHub Pages:
   ```bash
   npm run build
   npm run deploy
   ```

---

## ✅ That's It!

Your dashboard is now live at your Render URL!

**Features:**
- ✅ Frontend (React app)
- ✅ Backend (Proxy server)
- ✅ API integration working
- ✅ HTTPS enabled
- ✅ Free hosting!

---

## 🔄 Auto-Deployments

Render will automatically redeploy when you push to GitHub:

```bash
git add .
git commit -m "Update dashboard"
git push origin main
```

Wait 2-3 minutes, and your changes are live!

---

## ⚠️ Free Tier Limitations

- **Spins down after 15 minutes of inactivity**
- First request after sleep takes ~30 seconds
- 750 hours/month of runtime (plenty for most use)

To keep it awake, use a service like:
- UptimeRobot (free pings every 5 minutes)
- Cron-job.org

---

## 🐛 Troubleshooting

### Build Failed?
- Check the build logs in Render dashboard
- Make sure all dependencies are in `package.json`
- Verify `server-production.js` exists

### App Not Loading?
- Check "Logs" tab in Render dashboard
- Look for error messages
- Verify environment variables are set

### API Not Working?
- Check if Azure API is accessible from Render's servers
- Look at server logs for errors
- Test API endpoints directly

---

## 🎉 Success!

Your dashboard is now:
- ✅ Hosted on the internet
- ✅ Accessible from anywhere
- ✅ Free!
- ✅ Auto-updates from GitHub

**Share your dashboard URL with anyone!**

Example: `https://performance-dashboard-abcd.onrender.com`
