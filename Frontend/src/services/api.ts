import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
})

export const fetchItems = async () => {
  console.log("Fetching items from API...");
  const response = await API.get('/items');
  return response.data;
}