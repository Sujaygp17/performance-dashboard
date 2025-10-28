import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { testData } from './testData';
import { allMSAs } from './msaData';
import { fetchAllData } from './apiService';
import './App.css';

// Generate period options
const generatePeriodOptions = () => {
  const periods = [];
  const quarters = [
    { q: 'Q1', months: ['Jan', 'Feb', 'Mar'] },
    { q: 'Q2', months: ['Apr', 'May', 'Jun'] },
    { q: 'Q3', months: ['Jul', 'Aug', 'Sep'] },
    { q: 'Q4', months: ['Oct', 'Nov', 'Dec'] }
  ];
  
  quarters.forEach(quarter => {
    quarter.months.forEach(month => {
      for (let week = 1; week <= 4; week++) {
        const label = `${quarter.q} ${month} Week ${week}`;
        periods.push({ value: label, label: label });
      }
    });
  });
  
  return periods;
};

// Generate period options based on period label type
const generateDynamicPeriodOptions = (periodLabelType) => {
  if (!periodLabelType) return generatePeriodOptions();
  
  switch(periodLabelType) {
    case 'Quarter':
      return [
        { value: 'Q1', label: 'Q1' },
        { value: 'Q2', label: 'Q2' },
        { value: 'Q3', label: 'Q3' },
        { value: 'Q4', label: 'Q4' }
      ];
    
    case 'Month':
      return [
        { value: 'January', label: 'January' },
        { value: 'February', label: 'February' },
        { value: 'March', label: 'March' },
        { value: 'April', label: 'April' },
        { value: 'May', label: 'May' },
        { value: 'June', label: 'June' },
        { value: 'July', label: 'July' },
        { value: 'August', label: 'August' },
        { value: 'September', label: 'September' },
        { value: 'October', label: 'October' },
        { value: 'November', label: 'November' },
        { value: 'December', label: 'December' }
      ];
    
    case 'Year':
      return [
        { value: '2025', label: '2025' },
        { value: '2024', label: '2024' },
        { value: '2023', label: '2023' }
      ];
    
    case 'Week':
    default:
      return generatePeriodOptions();
  }
};

// Year options
const yearOptions = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' }
];

// Period Label options
const periodLabelOptions = [
  { value: 'Quarter', label: 'Quarter' },
  { value: 'Week', label: 'Week' },
  { value: 'Month', label: 'Month' },
  { value: 'Year', label: 'Year' }
];

// Region Label options
const regionLabelOptions = [
  { value: 'Total USA', label: 'Total USA' },
  { value: 'DG', label: 'DG' },
  { value: 'Division', label: 'Division' },
  { value: 'MSA', label: 'MSA' }
];

// Convert MSA array to select options
const msaAllOptions = allMSAs.map(msa => ({ value: msa, label: msa }));

function App() {
  // State for hierarchical navigation
  const [selectedDG, setSelectedDG] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedMSA, setSelectedMSA] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null); // Unified region selector
  
  // State for period and year selection
  const [selectedPeriod, setSelectedPeriod] = useState({ value: 'Q4 Oct Week 4', label: 'Q4 Oct Week 4' });
  const [selectedYear, setSelectedYear] = useState(yearOptions[0]);
  const [selectedPeriodLabel, setSelectedPeriodLabel] = useState({ value: 'Week', label: 'Week' });
  const [selectedRegionLabel, setSelectedRegionLabel] = useState({ value: 'Total USA', label: 'Total USA' });
  
  // State for vertical selection (multi-select) - separate for PG and Agency
  const [selectedPGVerticals, setSelectedPGVerticals] = useState([]);
  const [selectedAgencyVerticals, setSelectedAgencyVerticals] = useState([]);
  
  // State for current data to display
  const [currentData, setCurrentData] = useState(null);
  const [previousData, setPreviousData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null); // Store API response
  
  // Dropdown options
  const [dgOptions, setDgOptions] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [regionOptions, setRegionOptions] = useState([]); // Dynamic options based on Region Label
  const [dynamicPeriodOptions, setDynamicPeriodOptions] = useState(generatePeriodOptions());
  const [pgVerticalOptions] = useState([
    { value: 'Community health centers', label: 'Community health centers' },
    { value: 'Health Science Center', label: 'Health Science Center' },
    { value: 'Hospital based Groups', label: 'Hospital based Groups' },
    { value: 'Hospitals', label: 'Hospitals' },
    { value: 'Housecall', label: 'Housecall' },
    { value: 'Independent Clinics', label: 'Independent Clinics' },
    { value: 'Medical Center', label: 'Medical Center' },
    { value: 'Multispecialty groups', label: 'Multispecialty groups' },
    { value: 'Specialty Center', label: 'Specialty Center' },
    { value: 'Veteran Affairs', label: 'Veteran Affairs' }
  ]);
  const [agencyVerticalOptions] = useState([
    { value: 'Behavioural Health Service Groups', label: 'Behavioural Health Service Groups' },
    { value: 'DME', label: 'DME' },
    { value: 'Home Health Agency', label: 'Home Health Agency' },
    { value: 'Hospice', label: 'Hospice' },
    { value: 'Occupational Therapists', label: 'Occupational Therapists' },
    { value: 'Physiotherapy Groups', label: 'Physiotherapy Groups' },
    { value: 'Sleep Study', label: 'Sleep Study' },
    { value: 'Speech Services', label: 'Speech Services' },
    { value: 'Wound-care Groups', label: 'Wound-care Groups' }
  ]);

  // Initialize with US Total data
  useEffect(() => {
    setCurrentData(testData.currentWeek.data[0]);
    setPreviousData(testData.previousWeek.data[0]);
    
    // Set DG options
    const dgs = Object.keys(testData.hierarchy).map(dg => ({
      value: dg,
      label: dg
    }));
    setDgOptions(dgs);
  }, []);

  // Handle DG selection
  const handleDGChange = (selectedOption) => {
    setSelectedDG(selectedOption);
    setSelectedDivision(null);
    setSelectedMSA(null);
    
    if (selectedOption) {
      const dgData = testData.hierarchy[selectedOption.value];
      const divisions = Object.keys(dgData).map(div => ({
        value: div,
        label: div
      }));
      setDivisionOptions(divisions);
    } else {
      setDivisionOptions([]);
      // Reset to US Total
      setCurrentData(testData.currentWeek.data[0]);
      setPreviousData(testData.previousWeek.data[0]);
    }
  };

  // Handle Division selection
  const handleDivisionChange = (selectedOption) => {
    setSelectedDivision(selectedOption);
    setSelectedMSA(null);
  };

  // Handle MSA selection
  const handleMSAChange = (selectedOption) => {
    setSelectedMSA(selectedOption);
    // In a real app, you would fetch MSA-specific data here
  };
  
  // Handle period selection
  const handlePeriodChange = (selectedOption) => {
    setSelectedPeriod(selectedOption);
  };
  
  // Handle year selection
  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
  };
  
  // Handle period label selection
  const handlePeriodLabelChange = (selectedOption) => {
    setSelectedPeriodLabel(selectedOption);
    
    // Update period options based on selected period label
    const newPeriodOptions = generateDynamicPeriodOptions(selectedOption.value);
    setDynamicPeriodOptions(newPeriodOptions);
    
    // Reset period selection to first option when changing period label
    if (newPeriodOptions.length > 0) {
      setSelectedPeriod(newPeriodOptions[0]);
    }
  };
  
  // Handle region label selection
  const handleRegionLabelChange = (selectedOption) => {
    setSelectedRegionLabel(selectedOption);
    setSelectedRegion(null); // Reset region selection
    
    // Update region options based on selected region label
    switch(selectedOption.value) {
      case 'Total USA':
        setRegionOptions([{ value: 'USA', label: 'United States' }]);
        setSelectedRegion({ value: 'USA', label: 'United States' });
        break;
      
      case 'DG':
        // Load DG options
        const dgs = Object.keys(testData.hierarchy).map(dg => ({
          value: dg,
          label: dg
        }));
        setRegionOptions(dgs);
        break;
      
      case 'Division':
        // Need to load all divisions from all DGs
        const allDivisions = [];
        Object.keys(testData.hierarchy).forEach(dg => {
          Object.keys(testData.hierarchy[dg]).forEach(division => {
            allDivisions.push({ value: `${dg}|${division}`, label: division });
          });
        });
        setRegionOptions(allDivisions);
        break;
      
      case 'MSA':
        setRegionOptions(msaAllOptions);
        break;
      
      default:
        setRegionOptions([]);
    }
  };
  
  // Handle unified region selection
  const handleRegionChange = (selectedOption) => {
    setSelectedRegion(selectedOption);
  };

  // Handle PG vertical selection (multi-select)
  const handlePGVerticalChange = (selectedOptions) => {
    setSelectedPGVerticals(selectedOptions || []);
  };
  
  // Handle Agency vertical selection (multi-select)
  const handleAgencyVerticalChange = (selectedOptions) => {
    setSelectedAgencyVerticals(selectedOptions || []);
  };
  
  // Calculate previous period based on selected period
  const getPreviousPeriod = () => {
    if (!selectedPeriod || !selectedPeriodLabel) return 'Previous Period';
    
    const currentPeriodValue = selectedPeriod.value;
    const periodType = selectedPeriodLabel.value;
    
    switch(periodType) {
      case 'Quarter':
        // Handle Quarter (Q1, Q2, Q3, Q4)
        const quarterMatch = currentPeriodValue.match(/Q(\d+)/);
        if (quarterMatch) {
          const quarterNum = parseInt(quarterMatch[1]);
          return quarterNum > 1 ? `Q${quarterNum - 1}` : 'Q4';
        }
        break;
      
      case 'Month':
        // Handle Month
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
        const monthIndex = months.indexOf(currentPeriodValue);
        if (monthIndex !== -1) {
          return monthIndex > 0 ? months[monthIndex - 1] : 'December';
        }
        break;
      
      case 'Year':
        // Handle Year
        const yearNum = parseInt(currentPeriodValue);
        if (!isNaN(yearNum)) {
          return `${yearNum - 1}`;
        }
        break;
      
      case 'Week':
      default:
        // Handle Week (Q4 Oct Week 4 format)
        const match = currentPeriodValue.match(/(Q\d+)\s+(\w+)\s+Week\s+(\d+)/);
        
        if (match) {
          const [, quarter, month, week] = match;
          const weekNum = parseInt(week);
          
          if (weekNum > 1) {
            // Previous week in same month
            return `${quarter} ${month} Week ${weekNum - 1}`;
          } else {
            // Need to go to previous month
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const monthIndex = months.indexOf(month);
            
            if (monthIndex > 0) {
              const prevMonth = months[monthIndex - 1];
              const prevQuarter = `Q${Math.floor((monthIndex - 1) / 3) + 1}`;
              return `${prevQuarter} ${prevMonth} Week 4`;
            } else {
              // Wrap to December of previous year
              return `Q4 Dec Week 4`;
            }
          }
        }
        break;
    }
    
    return 'Previous Period';
  };
  
  // Get previous year for display
  const getPreviousYear = () => {
    if (!selectedYear) return '';
    const currentYear = parseInt(selectedYear.value);
    if (selectedPeriodLabel?.value === 'Year') {
      // For Year period type, previous period already includes the year
      return '';
    }
    return currentYear - 1;
  };

  // Convert period label to period type for API
  const getPeriodTypeForAPI = () => {
    if (!selectedPeriodLabel) return 'week';
    
    switch(selectedPeriodLabel.value) {
      case 'Quarter':
        return 'quarter';
      case 'Month':
        return 'month';
      case 'Year':
        return 'year';
      case 'Week':
      default:
        return 'week';
    }
  };

  // Format period label for API (e.g., "Q4 Oct Week1" without space before number)
  const formatPeriodLabelForAPI = (periodValue) => {
    if (!periodValue) return '';
    
    // Convert "Q4 Oct Week 4" to "Q4 Oct Week4"
    return periodValue.replace(/Week\s+(\d+)/, 'Week$1');
  };

  // Fetch data from API when MSA is selected
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      // Only fetch if Region Label is MSA and a region is selected
      if (selectedRegionLabel?.value !== 'MSA' || !selectedRegion) {
        setApiData(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const params = {
          msa: selectedRegion.value,
          periodType: getPeriodTypeForAPI(),
          periodLabel: formatPeriodLabelForAPI(selectedPeriod.value),
          year: selectedYear.value
        };

        console.log('Fetching data with params:', params);
        const data = await fetchAllData(params);
        console.log('Received data:', data);
        
        setApiData(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data from API. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, [selectedRegion, selectedPeriod, selectedYear, selectedPeriodLabel, selectedRegionLabel]);

  // Filter verticals based on selection
  const getFilteredVerticals = (data) => {
    if (!data || !data.verticals) return [];
    
    // If no filters selected, return all
    if (selectedPGVerticals.length === 0 && selectedAgencyVerticals.length === 0) {
      return data.verticals;
    }
    
    // Combine selected verticals from both PG and Agency
    const allSelectedVerticals = [
      ...selectedPGVerticals,
      ...selectedAgencyVerticals
    ];
    
    return data.verticals.filter(v => 
      allSelectedVerticals.some(sv => sv.value === v.verticals)
    );
  };

  // Calculate week-over-week change
  const calculateChange = (current, previous) => {
    if (!current || !previous) return null;
    const curr = parseFloat(current.replace(/[^0-9.-]/g, ''));
    const prev = parseFloat(previous.replace(/[^0-9.-]/g, ''));
    if (isNaN(curr) || isNaN(prev) || prev === 0) return null;
    const change = ((curr - prev) / prev) * 100;
    return change.toFixed(1);
  };

  // Render metric card
  const renderMetricCard = (title, currentValue, goalData, previousValue = null) => {
    const change = previousValue ? calculateChange(currentValue, previousValue) : null;
    const goalCompletion = goalData ? goalData.percentOfGoalCompletion : null;
    
    return (
      <div className="metric-card">
        <div className="metric-title">{title}</div>
        <div className="metric-value">{currentValue || 'N/A'}</div>
        {goalData && (
          <div className="metric-goal">
            <span className={`goal-badge ${parseInt(goalCompletion) >= 100 ? 'goal-met' : 'goal-pending'}`}>
              {goalCompletion}% of goal
            </span>
            <span className="goal-target">Target: {goalData.goalValue}</span>
          </div>
        )}
        {change !== null && (
          <div className={`metric-change ${parseFloat(change) >= 0 ? 'positive' : 'negative'}`}>
            {parseFloat(change) >= 0 ? '↑' : '↓'} {Math.abs(change)}% WoW
          </div>
        )}
      </div>
    );
  };

  // Render PG Acquisition section
  const renderPGAcquisition = (pgaq, prevPgaq) => {
    if (!pgaq) return null;
    
    return (
      <div className="section">
        <h3 className="section-title">PG Acquisition</h3>
        <div className="metrics-grid">
          {renderMetricCard('TOFU PGs', pgaq.tofuPgsCount, pgaq.tofuPgsGoal, prevPgaq?.tofuPgsCount)}
          {renderMetricCard('MOFU PGs', pgaq.mofuPgsCount, pgaq.mofuPgsGoal, prevPgaq?.mofuPgsCount)}
          {renderMetricCard('BOFU PGs', pgaq.bofuPgsCount, pgaq.bofuPgsGoal, prevPgaq?.bofuPgsCount)}
          {renderMetricCard('Pilot PGs', pgaq.pilotPgsCount, pgaq.pilotPgsGoal, prevPgaq?.pilotPgsCount)}
          {renderMetricCard('Onboarded PGs', pgaq.onboardedPgsCount, pgaq.onboardedPgsGoal, prevPgaq?.onboardedPgsCount)}
          {renderMetricCard('% Onboarded', `${pgaq.percentOnboarded}%`, pgaq.percentOnboardedGoal, prevPgaq?.percentOnboarded ? `${prevPgaq.percentOnboarded}%` : null)}
          {renderMetricCard('Data Completeness', `${pgaq.dataCompleteness}%`, pgaq.dataCompletenessGoal, prevPgaq?.dataCompleteness ? `${prevPgaq.dataCompleteness}%` : null)}
        </div>
        
        {pgaq.tofuPgtype && (
          <div className="pgtype-breakdown">
            <h4>TOFU Breakdown</h4>
            <div className="pgtype-list">
              {pgaq.tofuPgtype.map((type, idx) => (
                <div key={idx} className="pgtype-item">
                  <span>{type.type}</span>
                  <span className="pgtype-count">{type.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render PG Customer Success section
  const renderPGCustomerSuccess = (pgcs, prevPgcs) => {
    if (!pgcs) return null;
    
    return (
      <div className="section">
        <h3 className="section-title">PG Customer Success</h3>
        <div className="metrics-grid">
          {renderMetricCard('Avg CPO Revenue/PG', pgcs.averageCpoRevenuePerPg, pgcs.averageCpoRevenuePerPgGoal, prevPgcs?.averageCpoRevenuePerPg)}
          {renderMetricCard('MoM CPO Revenue Growth', pgcs.monthOverMonthCpoRevenueGrowth, pgcs.monthOverMonthCpoRevenueGrowthGoal, prevPgcs?.monthOverMonthCpoRevenueGrowth)}
          {renderMetricCard('% CPOs Unbilled EOE', pgcs.percentCposUnbilledAtEndOfEpisode, pgcs.percentCposUnbilledAtEndOfEpisodeGoal, prevPgcs?.percentCposUnbilledAtEndOfEpisode)}
          {renderMetricCard('% CPOs Billed by Week 3', pgcs.percentCposBilledByThirdWeek, pgcs.percentCposBilledByThirdWeekGoal, prevPgcs?.percentCposBilledByThirdWeek)}
          {renderMetricCard('% PGs w/ EHR Access', pgcs.percentPgsWithActiveEhrAccess, pgcs.percentPgsWithActiveEhrAccessGoal, prevPgcs?.percentPgsWithActiveEhrAccess)}
          {renderMetricCard('% PGs w/ RPA/Doc Auto', pgcs.percentPgsLeveragingRpaDocAutomation, pgcs.percentPgsLeveragingRpaDocAutomationGoal, prevPgcs?.percentPgsLeveragingRpaDocAutomation)}
          {renderMetricCard('% PGs w/ DA Billing', pgcs.percentPgsUsingDaBillingServices, pgcs.percentPgsUsingDaBillingServicesGoal, prevPgcs?.percentPgsUsingDaBillingServices)}
          {renderMetricCard('% PGs CPO+ Services', pgcs.percentPgsEnrolledInCpoPlusAdditionalServices, pgcs.percentPgsEnrolledInCpoPlusAdditionalServicesGoal, prevPgcs?.percentPgsEnrolledInCpoPlusAdditionalServices)}
          {renderMetricCard('Proactive Reachouts/PG', pgcs.proactiveReachoutsPerPg, pgcs.proactiveReachoutsPerPgGoal, prevPgcs?.proactiveReachoutsPerPg)}
          {renderMetricCard('Reactive Tickets', pgcs.reactiveOutcomeTicketsReceived, pgcs.reactiveOutcomeTicketsReceivedGoal, prevPgcs?.reactiveOutcomeTicketsReceived)}
          {renderMetricCard('Avg Touchpoints/PG', pgcs.avgTouchpointsPerPg, pgcs.avgTouchpointsPerPgGoal, prevPgcs?.avgTouchpointsPerPg)}
        </div>
      </div>
    );
  };

  // Render HHAH Sales Value section
  const renderHHAHSalesValue = (hhah, prevHhah) => {
    if (!hhah) return null;
    
    return (
      <div className="section">
        <h3 className="section-title">HHAH Sales & Customer Success</h3>
        <div className="metrics-grid">
          {renderMetricCard('% Episodes Billed by EOE', hhah.percentEpisodesBilledByEoe, hhah.percentEpisodesBilledByEoeGoal, prevHhah?.percentEpisodesBilledByEoe)}
          {renderMetricCard('HHAHs w/ EHR Access', hhah.hhahsWithEhrAccess, hhah.hhahsWithEhrAccessGoal, prevHhah?.hhahsWithEhrAccess)}
          {renderMetricCard('HHAHs on Automation', hhah.hhahsOnAutomationServices, hhah.hhahsOnAutomationServicesGoal, prevHhah?.hhahsOnAutomationServices)}
          {renderMetricCard('% Providers on DA', hhah.percentProvidersOnDa, hhah.percentProvidersOnDaGoal, prevHhah?.percentProvidersOnDa)}
          {renderMetricCard('Proactive Reachouts/HHAH', hhah.proactiveReachoutsPerHhah, hhah.proactiveReachoutsPerHhahGoal, prevHhah?.proactiveReachoutsPerHhah)}
          {renderMetricCard('Reactive Tickets', hhah.reactiveOutcomeTicketsReceived, hhah.reactiveOutcomeTicketsReceivedGoal, prevHhah?.reactiveOutcomeTicketsReceived)}
          {renderMetricCard('% Freemium to DA Direct', hhah.percentMovedFreemiumToDaDirect, hhah.percentMovedFreemiumToDaDirectGoal, prevHhah?.percentMovedFreemiumToDaDirect)}
          {renderMetricCard('Avg Touchpoints/HHAH', hhah.avgTouchpointsPerHhah, hhah.avgTouchpointsPerHhahGoal, prevHhah?.avgTouchpointsPerHhah)}
          {renderMetricCard('Relationship Health Score', hhah.avgRelationshipHealthRapportScore, hhah.avgRelationshipHealthRapportScoreGoal, prevHhah?.avgRelationshipHealthRapportScore)}
          {renderMetricCard('Premium HHAHs', hhah.premiumHhahsCount, hhah.premiumHhahsCountGoal, prevHhah?.premiumHhahsCount)}
          {renderMetricCard('MoM Premium Growth', hhah.monthOverMonthGrowthPremiumUsers, hhah.monthOverMonthGrowthPremiumUsersGoal, prevHhah?.monthOverMonthGrowthPremiumUsers)}
        </div>
      </div>
    );
  };

  const currentVerticals = getFilteredVerticals(currentData);
  const previousVerticals = getFilteredVerticals(previousData);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Performance Dashboard</h1>
        <div className="period-info">
          <span className="current-period">
            {selectedPeriod?.label}
          </span>
          <span className="period-separator">vs</span>
          <span className="previous-period">
            {getPreviousPeriod()}
          </span>
        </div>
      </header>

      <div className="filters-container">
        <div className="filter-row">
          <div className="filter-group hierarchical-filters">
            <div className="filter-item">
              <label>Period Label</label>
              <Select
                value={selectedPeriodLabel}
                onChange={handlePeriodLabelChange}
                options={periodLabelOptions}
                placeholder="Select Period Label..."
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            
            <div className="filter-item">
              <label>Period</label>
              <Select
                value={selectedPeriod}
                onChange={handlePeriodChange}
                options={dynamicPeriodOptions}
                placeholder="Select Period..."
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            
            <div className="filter-item">
              <label>Region Label</label>
              <Select
                value={selectedRegionLabel}
                onChange={handleRegionLabelChange}
                options={regionLabelOptions}
                placeholder="Select Region Label..."
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            
            <div className="filter-item">
              <label>
                {selectedRegionLabel?.value === 'Total USA' && 'Region'}
                {selectedRegionLabel?.value === 'DG' && 'Division Group'}
                {selectedRegionLabel?.value === 'Division' && 'Division'}
                {selectedRegionLabel?.value === 'MSA' && 'MSA'}
              </label>
              <Select
                value={selectedRegion}
                onChange={handleRegionChange}
                options={regionOptions}
                isClearable={selectedRegionLabel?.value !== 'Total USA'}
                placeholder={`Select ${selectedRegionLabel?.label}...`}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>

            {selectedRegionLabel?.value === 'MSA' && (
              <div className="filter-item">
                <label>Year</label>
                <Select
                  value={selectedYear}
                  onChange={handleYearChange}
                  options={yearOptions}
                  placeholder="Select Year..."
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
            )}
          </div>

          <div className="filter-group vertical-filter">
            <div className="filter-item">
              <label>PG Verticals</label>
              <Select
                value={selectedPGVerticals}
                onChange={handlePGVerticalChange}
                options={pgVerticalOptions}
                isMulti
                placeholder="All PG Verticals"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            
            <div className="filter-item">
              <label>Agency Verticals</label>
              <Select
                value={selectedAgencyVerticals}
                onChange={handleAgencyVerticalChange}
                options={agencyVerticalOptions}
                isMulti
                placeholder="All Agency Verticals"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading data...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p className="error-message">{error}</p>
          </div>
        )}

        {!loading && !error && apiData && selectedRegionLabel?.value === 'MSA' && (
          <>
            {/* Display API Data for MSA */}
            <div className="overview-section">
              <h2 className="main-title">
                {selectedRegion?.label} Overview
              </h2>
              <div className="overview-stats">
                <div className="stat-card">
                  <div className="stat-label">PG Estimate</div>
                  <div className="stat-value">{apiData.pgData?.pgEstimate || 'N/A'}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Agency Estimate</div>
                  <div className="stat-value">{apiData.hhahData?.agencyEstimate || 'N/A'}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Period</div>
                  <div className="stat-value">{apiData.pgData?.periodLabel}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Year</div>
                  <div className="stat-value">{apiData.pgData?.year}</div>
                </div>
              </div>
            </div>

            {/* Display PG Verticals from API */}
            {apiData.pgData?.verticals && apiData.pgData.verticals.length > 0 && (
              <div className="api-section">
                <h2 className="section-title">PG (Practice Group) Data</h2>
                {apiData.pgData.verticals
                  .filter(vertical => {
                    // Filter by selected PG verticals if any
                    if (selectedPGVerticals.length === 0) return true;
                    return selectedPGVerticals.some(sel => sel.value === vertical.verticals);
                  })
                  .map((vertical, index) => (
                    <div key={index} className="vertical-container">
                      <div className="vertical-header">
                        <h2>{vertical.verticals}</h2>
                        <div className="vertical-stats">
                          <span className="vertical-stat">
                            PG Acquisition: {vertical.pgaquisitionPercentage}%
                          </span>
                          <span className="vertical-stat">
                            PG Customer Success: {vertical.pgCustomerSuccessPercentage}%
                          </span>
                        </div>
                      </div>

                      {vertical.pgaquisition && renderPGAcquisition(vertical.pgaquisition, null)}
                      {vertical.pgCustomerSuccess && renderPGCustomerSuccess(vertical.pgCustomerSuccess, null)}
                    </div>
                  ))}
              </div>
            )}

            {/* Display Agency Verticals from API */}
            {apiData.hhahData?.verticals && apiData.hhahData.verticals.length > 0 && (
              <div className="api-section">
                <h2 className="section-title">Agency (HHAH) Data</h2>
                {apiData.hhahData.verticals
                  .filter(vertical => {
                    // Filter by selected Agency verticals if any
                    if (selectedAgencyVerticals.length === 0) return true;
                    return selectedAgencyVerticals.some(sel => sel.value === vertical.verticals);
                  })
                  .map((vertical, index) => (
                    <div key={index} className="vertical-container">
                      <div className="vertical-header">
                        <h2>{vertical.verticals}</h2>
                        <div className="vertical-stats">
                          <span className="vertical-stat">
                            HHAH Sales: {vertical.hhahSalesValuePercentage}%
                          </span>
                        </div>
                      </div>

                      {vertical.hhahSalesValue && renderHHAHSalesValue(vertical.hhahSalesValue, null)}
                    </div>
                  ))}
              </div>
            )}
          </>
        )}

        {!loading && !error && (!apiData || selectedRegionLabel?.value !== 'MSA') && currentData && (
          <>
            {/* Display Test Data for non-MSA selections */}
            <div className="overview-section">
              <h2 className="main-title">
                {selectedRegion ? selectedRegion.label : 'US Total'} Overview
              </h2>
              <div className="overview-stats">
                <div className="stat-card">
                  <div className="stat-label">PG Estimate</div>
                  <div className="stat-value">{currentData.pgEstimate}</div>
                  {previousData && (
                    <div className="stat-change">
                      {calculateChange(currentData.pgEstimate, previousData.pgEstimate) 
                        ? `${calculateChange(currentData.pgEstimate, previousData.pgEstimate)}% WoW` 
                        : ''}
                    </div>
                  )}
                </div>
                <div className="stat-card">
                  <div className="stat-label">Agency Estimate</div>
                  <div className="stat-value">{currentData.agencyEstimate}</div>
                  {previousData && (
                    <div className="stat-change">
                      {calculateChange(currentData.agencyEstimate, previousData.agencyEstimate) 
                        ? `${calculateChange(currentData.agencyEstimate, previousData.agencyEstimate)}% WoW` 
                        : ''}
                    </div>
                  )}
                </div>
                <div className="stat-card">
                  <div className="stat-label">Active Verticals</div>
                  <div className="stat-value">{currentVerticals.length}</div>
                </div>
              </div>
            </div>

            {currentVerticals.map((vertical, index) => {
              const prevVertical = previousVerticals.find(v => v.verticals === vertical.verticals);
              
              return (
                <div key={index} className="vertical-container">
                  <div className="vertical-header">
                    <h2>{vertical.verticals}</h2>
                    <div className="vertical-stats">
                      <span className="vertical-stat">
                        PG Acquisition: {vertical.pgaquisitionPercentage}%
                      </span>
                      <span className="vertical-stat">
                        PG Customer Success: {vertical.pgCustomerSuccessPercentage}%
                      </span>
                      {vertical.hhahSalesValuePercentage && (
                        <span className="vertical-stat">
                          HHAH Sales: {vertical.hhahSalesValuePercentage}%
                        </span>
                      )}
                    </div>
                  </div>

                  {vertical.pgaquisition && renderPGAcquisition(vertical.pgaquisition, prevVertical?.pgaquisition)}
                  {vertical.pgCustomerSuccess && renderPGCustomerSuccess(vertical.pgCustomerSuccess, prevVertical?.pgCustomerSuccess)}
                  {vertical.hhahSalesValue && renderHHAHSalesValue(vertical.hhahSalesValue, prevVertical?.hhahSalesValue)}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
