# Performance Dashboard - API Integration

This dashboard now integrates with the Azure API to fetch real-time performance data for MSA (Metropolitan Statistical Area) selections.

## Features

- **API Integration**: Fetches live data from Azure API for MSA selections
- **Proxy Server**: Node.js proxy server to handle CORS and API requests
- **Dynamic Filtering**: Filter by Period, Region, PG Verticals, and Agency Verticals
- **Real-time Data**: Displays PG (Practice Group) and Agency (HHAH) metrics

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

#### Option 1: Run Both Frontend and Backend Together (Recommended)

```bash
npm run dev
```

This will start:
- Proxy server on `http://localhost:3001`
- React app on `http://localhost:3000`

#### Option 2: Run Separately

Terminal 1 - Start the proxy server:
```bash
npm run server
```

Terminal 2 - Start the React app:
```bash
npm start
```

## How to Use

1. **Select Region Label**: Choose "MSA" to enable API integration
2. **Select MSA**: Pick any MSA from the dropdown (e.g., "Providence-Warwick, RI-MA")
3. **Select Period Label**: Choose Quarter, Month, Week, or Year
4. **Select Period**: Choose the specific period (e.g., "Q4 Oct Week1")
5. **Select Year**: Pick the year (e.g., "2025")
6. **Filter Verticals** (Optional): 
   - Select specific PG Verticals (Community health centers, Hospitals, etc.)
   - Select specific Agency Verticals (Home Health Agency, Hospice, etc.)

## API Endpoints

The proxy server exposes two endpoints:

- `POST /api/pg` - Fetch PG (Practice Group) data
- `POST /api/hhah` - Fetch HHAH (Agency) data

### Request Format

```json
{
  "msa": "Providence-Warwick, RI-MA",
  "periodType": "week",
  "periodLabel": "Q4 Oct Week1",
  "year": "2025"
}
```

## Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_API_URL=http://localhost:3001/api
```

For production, update this to your production API URL.

## API Response Structure

### PG Data Response
- `pgEstimate`: Estimated number of practice groups
- `verticals`: Array of vertical data including:
  - `pgaquisition`: Acquisition metrics (TOFU, MOFU, BOFU counts)
  - `pgCustomerSuccess`: Customer success metrics (CPO revenue, EHR access, etc.)
  - Percentage completion for various goals

### HHAH Data Response
- `agencyEstimate`: Estimated number of agencies
- `verticals`: Array of vertical data including:
  - `hhahSalesValue`: Sales and customer success metrics
  - Episodes billed, EHR access, automation services
  - Premium HHAHs count and growth metrics

## Troubleshooting

### CORS Errors
If you see CORS errors, ensure the proxy server is running on port 3001.

### API Connection Issues
- Check that the Azure API endpoint is accessible
- Verify network connectivity
- Check console logs for detailed error messages

### No Data Displayed
- Ensure you've selected "MSA" as the Region Label
- Verify an MSA is selected from the dropdown
- Check browser console for error messages
- Verify the period format matches the API requirements

## Development

### Project Structure

```
performance-dashboard/
├── public/
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Styling
│   ├── apiService.js       # API integration service
│   ├── msaData.js          # MSA data (2000+ entries)
│   └── testData.js         # Test/fallback data
├── server.js               # Proxy server
├── package.json
└── .env                    # Environment variables
```

### Testing API Integration

You can test the API directly using curl:

```bash
# Test HHAH endpoint
curl -X 'POST' \
  'http://localhost:3001/api/hhah' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "msa": "Providence-Warwick, RI-MA",
  "periodType": "week",
  "periodLabel": "Q4 Oct Week1",
  "year": "2025"
}'

# Test PG endpoint
curl -X 'POST' \
  'http://localhost:3001/api/pg' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "msa": "Providence-Warwick, RI-MA",
  "periodType": "week",
  "periodLabel": "Q4 Oct Week1",
  "year": "2025"
}'
```

## Deployment

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

```bash
npm run deploy
```

Note: For production deployment, you'll need to:
1. Deploy the proxy server separately (e.g., to Heroku, AWS, Azure)
2. Update the `.env` file with the production API URL
3. Rebuild and redeploy the React app

## License

MIT
