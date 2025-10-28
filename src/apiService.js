import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

/**
 * Fetch HHAH (Agency) data from the API
 * @param {Object} params - Request parameters
 * @param {string} params.msa - MSA name
 * @param {string} params.periodType - Type of period (week, month, quarter, year)
 * @param {string} params.periodLabel - Period label (e.g., "Q4 Oct Week1")
 * @param {string} params.year - Year (e.g., "2025")
 * @returns {Promise<Object>} HHAH data
 */
export const fetchHHAHData = async ({ msa, periodType, periodLabel, year }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/hhah`, {
      msa,
      periodType,
      periodLabel,
      year
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching HHAH data:', error);
    throw error;
  }
};

/**
 * Fetch PG (Practice Group) data from the API
 * @param {Object} params - Request parameters
 * @param {string} params.msa - MSA name
 * @param {string} params.periodType - Type of period (week, month, quarter, year)
 * @param {string} params.periodLabel - Period label (e.g., "Q4 Oct Week1")
 * @param {string} params.year - Year (e.g., "2025")
 * @returns {Promise<Object>} PG data
 */
export const fetchPGData = async ({ msa, periodType, periodLabel, year }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pg`, {
      msa,
      periodType,
      periodLabel,
      year
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching PG data:', error);
    throw error;
  }
};

/**
 * Fetch both HHAH and PG data for a given MSA and period
 * @param {Object} params - Request parameters
 * @returns {Promise<Object>} Combined data { hhahData, pgData }
 */
export const fetchAllData = async (params) => {
  try {
    const [hhahData, pgData] = await Promise.all([
      fetchHHAHData(params),
      fetchPGData(params)
    ]);
    return { hhahData, pgData };
  } catch (error) {
    console.error('Error fetching all data:', error);
    throw error;
  }
};
