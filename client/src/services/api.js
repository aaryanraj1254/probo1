//create a service file for api calls if u want to fetch data from your backend
import axios from 'axios';

const API_URL = 'http://localhost:5173/api'; 

export const fetchData = async () => {
  try{
  const response = await axios.get(`${API_URL}/data`);
  return response.data;
  }catch(error){
    console.log('Error fetching data:',error);
    throw error;
  }
};