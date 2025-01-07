import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
})

export const fetchCharacters = async () => {
  const response = await API.get('/characters');
  return response.data;
}