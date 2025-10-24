import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { testData } from './testData';
import './App.css';

function App() {
  // State for hierarchical navigation
  const [selectedDG, setSelectedDG] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedMSA, setSelectedMSA] = useState(null);
  
  // State for vertical selection (multi-select)
  const [selectedVerticals, setSelectedVerticals] = useState([]);
  
  // State for current data to display
  const [currentData, setCurrentData] = useState(null);
  const [previousData, setPreviousData] = useState(null);
  
  // Dropdown options
  const [dgOptions, setDgOptions] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [msaOptions, setMsaOptions] = useState([]);

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
      setMsaOptions([]);
    } else {
      setDivisionOptions([]);
      setMsaOptions([]);
      // Reset to US Total
      setCurrentData(testData.currentWeek.data[0]);
      setPreviousData(testData.previousWeek.data[0]);
    }
  };

  // Handle Division selection
  const handleDivisionChange = (selectedOption) => {
    setSelectedDivision(selectedOption);
    setSelectedMSA(null);
    
    if (selectedOption && selectedDG) {
      const divisionData = testData.hierarchy[selectedDG.value][selectedOption.value];
      const divisions = divisionData.divisions || [];
      const msas = divisions.flatMap(div => divisionData.msas[div] || []);
      
      const msaOpts = msas.map(msa => ({
        value: msa,
        label: msa
      }));
      setMsaOptions(msaOpts);
    } else {
      setMsaOptions([]);
    }
  };

  // Handle MSA selection
  const handleMSAChange = (selectedOption) => {
    setSelectedMSA(selectedOption);
    // In a real app, you would fetch MSA-specific data here
  };

  // Handle vertical selection (multi-select)
  const handleVerticalChange = (selectedOptions) => {
    setSelectedVerticals(selectedOptions || []);
  };

  // Filter verticals based on selection
  const getFilteredVerticals = (data) => {
    if (!data || !data.verticals) return [];
    
    if (selectedVerticals.length === 0) {
      return data.verticals;
    }
    
    return data.verticals.filter(v => 
      selectedVerticals.some(sv => sv.value === v.verticals)
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
          <span className="current-period">{testData.currentWeek.periodLabel} {testData.currentWeek.year}</span>
          <span className="period-separator">vs</span>
          <span className="previous-period">{testData.previousWeek.periodLabel} {testData.previousWeek.year}</span>
        </div>
      </header>

      <div className="filters-container">
        <div className="filter-row">
          <div className="filter-group hierarchical-filters">
            <div className="filter-item">
              <label>Distribution Group (DG)</label>
              <Select
                value={selectedDG}
                onChange={handleDGChange}
                options={dgOptions}
                isClearable
                placeholder="Select DG..."
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>

            <div className="filter-item">
              <label>Division</label>
              <Select
                value={selectedDivision}
                onChange={handleDivisionChange}
                options={divisionOptions}
                isClearable
                isDisabled={!selectedDG}
                placeholder="Select Division..."
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>

            <div className="filter-item">
              <label>MSA</label>
              <Select
                value={selectedMSA}
                onChange={handleMSAChange}
                options={msaOptions}
                isClearable
                isDisabled={!selectedDivision}
                placeholder="Select MSA..."
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
          </div>

          <div className="filter-group vertical-filter">
            <div className="filter-item">
              <label>Verticals</label>
              <Select
                value={selectedVerticals}
                onChange={handleVerticalChange}
                options={testData.verticalOptions}
                isMulti
                placeholder="All Verticals"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        {currentData && (
          <div className="overview-section">
            <h2 className="main-title">
              {selectedMSA ? selectedMSA.label : 
               selectedDivision ? selectedDivision.label : 
               selectedDG ? selectedDG.label : 'US Total'} Overview
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
        )}

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
      </div>
    </div>
  );
}

export default App;
