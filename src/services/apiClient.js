// services/apiClient.js
import axios from 'axios';

var baseURL = "";
if(import.meta.env.DEV)
{
  baseURL ="http://localhost/course/";

}else{
  baseURL ="/course-t9/";
}

const apiClient = axios.create({
  baseURL: baseURL, // Base URL for your backend endpoints
  headers: {
    'Content-Type': 'application/json',
  },
});


export default apiClient;
