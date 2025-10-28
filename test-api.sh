#!/bin/bash

echo "Testing Proxy Server API..."
echo ""

echo "1. Testing PG endpoint:"
curl -s -X POST http://localhost:3001/api/pg \
  -H 'Content-Type: application/json' \
  -d '{
    "msa": "Providence-Warwick, RI-MA",
    "periodType": "week",
    "periodLabel": "Q4 Oct Week1",
    "year": "2025"
  }' | python3 -m json.tool | head -30

echo ""
echo ""
echo "2. Testing HHAH endpoint:"
curl -s -X POST http://localhost:3001/api/hhah \
  -H 'Content-Type: application/json' \
  -d '{
    "msa": "Providence-Warwick, RI-MA",
    "periodType": "week",
    "periodLabel": "Q4 Oct Week1",
    "year": "2025"
  }' | python3 -m json.tool | head -30

echo ""
echo "API test complete!"
