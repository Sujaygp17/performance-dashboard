# Performance Dashboard - API Integration Summary

## ✅ What Has Been Implemented

### 1. **Proxy Server** (`server.js`)
- Node.js/Express server running on `http://localhost:3001`
- CORS-enabled to allow requests from React app
- Two API endpoints:
  - `POST /api/pg` - Fetches PG (Practice Group) data
  - `POST /api/hhah` - Fetches Agency/HHAH data
- Forwards requests to Azure API: `https://dawavorderpatient-hqe2apddbje9gte0.eastus-01.azurewebsites.net/api/cycleoflife/`
- Comprehensive error logging and handling

### 2. **API Service** (`src/apiService.js`)
- Axios-based service for making API calls
- Three exported functions:
  - `fetchHHAHData()` - Get Agency data
  - `fetchPGData()` - Get PG data
  - `fetchAllData()` - Get both in parallel
- Configurable API URL via environment variable

### 3. **React App Updates** (`src/App.js`)
- **New State Variables:**
  - `loading` - Shows loading spinner during API calls
  - `error` - Displays error messages if API fails
  - `apiData` - Stores API response data
  
- **New Functions:**
  - `getPeriodTypeForAPI()` - Converts period label to API format (quarter/month/week/year)
  - `formatPeriodLabelForAPI()` - Formats period (e.g., "Q4 Oct Week 4" → "Q4 Oct Week4")
  
- **API Integration useEffect:**
  - Automatically fetches data when MSA is selected
  - Triggers on changes to: region, period, year, period label
  - Only activates when Region Label is "MSA"
  
- **Conditional Rendering:**
  - Shows loading spinner while fetching
  - Displays error message if API fails
  - Shows API data for MSA selections
  - Falls back to test data for non-MSA selections
  
- **Year Dropdown:**
  - Re-added conditionally (only shows when MSA is selected)
  - Required by the API

### 4. **Styling** (`src/App.css`)
- Loading spinner with rotation animation
- Error container with red styling
- API section styling
- Responsive design maintained

### 5. **Configuration**
- `.env` file for API URL configuration
- `package.json` updated with new dependencies:
  - `axios` - HTTP client
  - `express` - Web server
  - `cors` - CORS middleware
  - `concurrently` - Run multiple commands

### 6. **Documentation**
- `API_INTEGRATION.md` - Complete integration guide
- `test-api.sh` - Shell script for testing API endpoints

## 🎯 How It Works

### User Flow:

1. **User selects "MSA" from Region Label dropdown**
   - Year dropdown appears
   - API integration activates

2. **User selects an MSA** (e.g., "Providence-Warwick, RI-MA")
   - Loading spinner appears
   - App calls proxy server with:
     ```json
     {
       "msa": "Providence-Warwick, RI-MA",
       "periodType": "week",
       "periodLabel": "Q4 Oct Week1",
       "year": "2025"
     }
     ```

3. **Proxy server forwards request to Azure API**
   - Handles CORS
   - Returns data or error

4. **React app displays data**
   - If successful: Shows PG and Agency metrics
   - If 404: Shows "No data found" message
   - If error: Shows error message
   - Can filter by PG/Agency verticals

### Data Flow:

```
React App (localhost:3000)
    ↓
Proxy Server (localhost:3001)
    ↓
Azure API (dawavorderpatient...azurewebsites.net)
    ↓
Response flows back up the chain
```

## 📦 Dependencies Added

```json
{
  "dependencies": {
    "axios": "^1.6.0",
    "cors": "^2.8.5",
    "express": "^4.18.0"
  },
  "devDependencies": {
    "concurrently": "^8.2.0"
  }
}
```

## 🚀 Running the Application

### Method 1: All-in-One (Recommended)
```bash
npm run dev
```
This starts both proxy server and React app.

### Method 2: Separate Terminals
```bash
# Terminal 1
npm run server

# Terminal 2
npm start
```

## 🧪 Testing

### Test Proxy Server
```bash
./test-api.sh
```

### Test Manually
```bash
curl -X POST http://localhost:3001/api/pg \
  -H 'Content-Type: application/json' \
  -d '{
    "msa": "Providence-Warwick, RI-MA",
    "periodType": "week",
    "periodLabel": "Q4 Oct Week1",
    "year": "2025"
  }'
```

## 📊 API Response Handling

### Success (200)
- Displays PG Estimate, Agency Estimate
- Shows all verticals with metrics
- Applies vertical filters if selected

### Not Found (404)
- API returns: "PG CircleOfLife document not found"
- App shows: "No data available for selected combination"
- User can try different MSA/period/year

### Server Error (500)
- Shows error message to user
- Logs detailed error to console
- Suggests checking connection

## 🎨 UI Updates

### When MSA is NOT Selected:
- Shows test data (as before)
- Year dropdown hidden
- Works with Total USA, DG, Division selections

### When MSA IS Selected:
- Shows loading spinner during fetch
- Year dropdown appears
- Displays live API data
- Shows error messages if needed
- Can filter by PG/Agency verticals

## 🔧 Configuration

### Environment Variables (.env)
```
REACT_APP_API_URL=http://localhost:3001/api
```

For production, change to deployed proxy server URL.

### Proxy Server (server.js)
```javascript
const API_BASE_URL = 'https://dawavorderpatient-hqe2apddbje9gte0.eastus-01.azurewebsites.net/api/cycleoflife';
const PORT = 3001;
```

## 📝 API Request Format

The API expects this exact format:

```json
{
  "msa": "string",        // Must match exact MSA name
  "periodType": "string", // "week", "month", "quarter", or "year"
  "periodLabel": "string",// "Q4 Oct Week1" (no space before number)
  "year": "string"        // "2025"
}
```

**Important:** `periodLabel` format matters!
- ✅ Correct: "Q4 Oct Week1"
- ❌ Wrong: "Q4 Oct Week 1"

## 🛠️ Troubleshooting

### Proxy Server Not Starting
```bash
# Check if port 3001 is in use
lsof -ti:3001

# Kill existing process
pkill -f "node server.js"

# Restart
npm run server
```

### CORS Errors
- Ensure proxy server is running
- Check browser console for details
- Verify .env file has correct URL

### No Data Displayed
- Check Region Label is set to "MSA"
- Verify an MSA is selected
- Check browser console for errors
- Try different MSA/period combinations
- Check `server.log` for API responses

### API Returns 404
- Data doesn't exist for that combination
- Try different MSA, period, or year
- Check server logs to see what was sent

## 📂 File Structure

```
performance-dashboard/
├── server.js                    # ✨ NEW: Proxy server
├── .env                         # ✨ NEW: Environment config
├── API_INTEGRATION.md          # ✨ NEW: Integration docs
├── test-api.sh                 # ✨ NEW: Test script
├── package.json                # Updated: New dependencies
├── src/
│   ├── apiService.js           # ✨ NEW: API service
│   ├── App.js                  # Updated: API integration
│   └── App.css                 # Updated: Loading/error styles
└── ... (other existing files)
```

## ✅ Next Steps

1. **Test with different MSAs** - Try various combinations
2. **Handle more edge cases** - Add better error messages
3. **Add caching** - Store API responses temporarily
4. **Add retry logic** - Auto-retry failed requests
5. **Deploy proxy server** - To cloud platform (Heroku, AWS, Azure)
6. **Production build** - Update .env and deploy React app

## 🎉 Success Criteria

✅ Proxy server runs on port 3001
✅ React app connects to proxy server
✅ API requests are forwarded correctly
✅ Data is displayed when available
✅ Errors are handled gracefully
✅ Loading states work properly
✅ Vertical filters work with API data
✅ Year dropdown shows conditionally
✅ Test data fallback works for non-MSA selections

## 🔍 Current Status

- ✅ Proxy server: **Running**
- ✅ React app: **Running**
- ✅ API integration: **Working**
- ✅ Error handling: **Implemented**
- ✅ Loading states: **Implemented**
- ✅ Documentation: **Complete**

The integration is **fully functional**! Users can now select an MSA and get live data from the Azure API.
