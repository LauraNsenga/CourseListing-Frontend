// services/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3100/course', // Base URL for your backend endpoints
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
