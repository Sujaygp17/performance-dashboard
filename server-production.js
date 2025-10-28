const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// API endpoints
const API_BASE_URL = 'https://dawavorderpatient-hqe2apddbje9gte0.eastus-01.azurewebsites.net/api/cycleoflife';

// Proxy endpoint for HHAH data
app.post('/api/hhah', async (req, res) => {
  try {
    console.log('Received HHAH request:', JSON.stringify(req.body, null, 2));
    const apiUrl = `${API_BASE_URL}/hhah`;
    console.log('Calling:', apiUrl);
    
    const response = await axios.post(apiUrl, req.body, {
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      }
    });
    
    console.log('HHAH response status:', response.status);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching HHAH data:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    res.status(500).json({ 
      error: 'Failed to fetch HHAH data', 
      details: error.message,
      responseData: error.response?.data 
    });
  }
});

// Proxy endpoint for PG data
app.post('/api/pg', async (req, res) => {
  try {
    console.log('Received PG request:', JSON.stringify(req.body, null, 2));
    const apiUrl = `${API_BASE_URL}/pg`;
    console.log('Calling:', apiUrl);
    
    const response = await axios.post(apiUrl, req.body, {
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      }
    });
    
    console.log('PG response status:', response.status);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching PG data:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    res.status(500).json({ 
      error: 'Failed to fetch PG data', 
      details: error.message,
      responseData: error.response?.data 
    });
  }
});

// Serve static files from React build (for production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
