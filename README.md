# Performance Dashboard

A comprehensive React.js dashboard for visualizing performance metrics across different organizational levels and verticals.

## Features

- **Hierarchical Navigation**: Navigate through US Total → DG → Division → MSA levels
- **Multi-Select Verticals**: Filter data by multiple verticals (Cardiology, Orthopedics, Neurology, etc.)
- **Week-over-Week Comparison**: Compare current week vs previous week data
- **Three Main Sections per Vertical**:
  - PG Acquisition
  - PG Customer Success
  - HHAH Sales & Customer Success
- **Goal Tracking**: Visual indicators showing progress toward goals
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "performance dashboard"
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## Usage

1. **Initial View**: The dashboard displays US Total data for the current week vs previous week
2. **DG Selection**: Select a Distribution Group from the dropdown
3. **Division Selection**: Once a DG is selected, choose a Division
4. **MSA Selection**: After selecting a Division, choose an MSA
5. **Vertical Filtering**: Use the multi-select dropdown to filter by specific verticals

## Data Structure

The application uses a comprehensive data model based on C# classes, including:

- **CircleOfLifeMsa**: Main data container for PG metrics
- **CircleOfLifeMsaHHAH**: Data container for HHAH metrics
- **Vertical**: Contains PG Acquisition and Customer Success data
- **HHAHVertical**: Contains HHAH-specific metrics

## Build for Production

To create a production build:
```bash
npm run build
```

The optimized build will be in the `build` folder.

## Technologies Used

- React 18
- react-select (for enhanced dropdowns)
- CSS3 with Flexbox and Grid
- Modern ES6+ JavaScript

## License

This project is proprietary and confidential.
