import axios from 'axios';
import { getToken } from '../services/token';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiAuth.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { apiAuth, api };
