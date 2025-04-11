import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export const getMobiles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mobiles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching mobiles:', error);
    throw error;
  }
};

export const getMobileById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mobiles/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching mobile:', error);
    throw error;
  }
};

export const searchMobiles = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mobiles/search`, {
      params: { query }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching mobiles:', error);
    throw error;
  }
};

export const compareMobiles = async (mobile1Id, mobile2Id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mobiles/compare`, {
      params: { mobile1_id: mobile1Id, mobile2_id: mobile2Id }
    });
    return response.data;
  } catch (error) {
    console.error('Error comparing mobiles:', error);
    throw error;
  }
};