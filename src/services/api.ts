// services/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://disease.sh/v3/covid-19';

export const fetchWorldwideData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching worldwide data:', error);
    throw error;
  }
};

export const fetchCountryData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/countries`);
    return response.data;
  } catch (error) {
    console.error('Error fetching country-specific data:', error);
    throw error;
  }
};

export const fetchHistoricalData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/historical/all?lastdays=all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching historical data:', error);
    throw error;
  }
};
