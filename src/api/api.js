import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

export const fetchDestinations = () => axios.get(`${API}/destination`);
export const searchHotels = (data) => axios.post(`${API}/hotels`, data);
export const getHotels = () => axios.get(`${API}/hotels`);
