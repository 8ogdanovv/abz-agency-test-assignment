const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

const fetchPositions = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.positions;
  } catch (error) {
    console.error('Error fetching positions:', error);
    return [];
  }
};

export default fetchPositions;
