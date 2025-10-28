# 🚀 Quick Start Guide

## Get Started in 3 Steps!

### Step 1: Start the Servers
```bash
cd "/Users/sujaygp/Desktop/performance dashboard"
npm run dev
```

This will start:
- Proxy server on http://localhost:3001
- React app on http://localhost:3000

### Step 2: Open the Dashboard
Your browser should automatically open to:
```
http://localhost:3000/performance-dashboard
```

If not, open it manually.

### Step 3: Use the Dashboard with Live API Data

1. **Select "MSA" from the Region Label dropdown**
2. **Pick any MSA** (try "Providence-Warwick, RI-MA")
3. **Select Period Label** (Quarter, Month, Week, or Year)
4. **Choose a Period** (e.g., "Q4 Oct Week1")
5. **Select Year** (e.g., "2025")
6. **Watch the data load!** 📊

### Optional: Filter by Verticals
- **PG Verticals**: Community health centers, Hospitals, Independent Clinics, etc.
- **Agency Verticals**: Home Health Agency, Hospice, DME, etc.

---

## 📌 Important Notes

### ⚠️ 404 Errors are Normal
If you see "No data available", it means the API doesn't have data for that specific combination of MSA, period, and year. Try a different combination!

### 🔄 Test Data vs Live Data
- **MSA selected** = Live API data
- **Total USA/DG/Division** = Test data (as before)

### 🎯 Correct Period Format
The API is picky about format:
- ✅ "Q4 Oct Week1" (no space before number)
- ❌ "Q4 Oct Week 1" (space before number)

The app handles this automatically!

---

## 🛠️ Troubleshooting

### Proxy Server Not Running?
```bash
npm run server
```

### React App Not Starting?
```bash
npm start
```

### Kill All Servers?
```bash
pkill -f "node server.js"
# Then restart with npm run dev
```

### Check Logs?
```bash
# Server logs
cat server.log

# Or check browser console (F12)
```

---

## ✅ What's Working

✅ API integration with Azure
✅ Real-time data fetching for MSAs
✅ Loading states
✅ Error handling
✅ Vertical filtering
✅ All 2000+ MSAs available
✅ Multiple period types (Week, Month, Quarter, Year)

---

## 📚 More Info

- Full documentation: `API_INTEGRATION.md`
- Technical summary: `INTEGRATION_SUMMARY.md`
- Test the API: `./test-api.sh`

---

## 🎉 You're All Set!

The dashboard is now connected to live data. Select an MSA and explore!

**Pro Tip:** The API has data for specific MSA/period/year combinations. If you get a 404, try:
- Different MSA
- Different period
- Different year
- Check what data exists in the Azure database
