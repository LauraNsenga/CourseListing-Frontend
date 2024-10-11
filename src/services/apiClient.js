// services/apiClient.js
import axios from 'axios';

var baseURL = "";
if(import.meta.env.DEV)
{
  baseURL ="http://localhost/course/";

}else{
  baseurl ="/course-t9/";
}

const apiClient = axios.create({
  baseURL: 'http://localhost:3019/course', // Base URL for your backend endpoints
  headers: {
    'Content-Type': 'application/json',
  },
});


export default apiClient;
