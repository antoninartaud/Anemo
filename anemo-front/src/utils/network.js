import axios from 'axios';

const API_URL = 'http://localhost:8000/';

export const getQuestionList = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);

    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
