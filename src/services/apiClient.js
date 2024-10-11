// services/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3019/course-t9', // Base URL for your backend endpoints
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
