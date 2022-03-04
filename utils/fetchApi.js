import axios from "axios";
const dotenv = require('dotenv');
  
dotenv.config();
  

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': process.env.HOST,
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY
    },
  });
    
  return data;
}