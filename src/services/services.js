import axios from "axios";
//import Router from "../router.js";

var baseurl = "";
if (import.meta.env.DEV) {
  baseurl = "http://localhost:3100/";
} else {
  baseurl = "http://localhost:3100/";
}

const apiClient = axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    crossDomain: true,
  },
});

export default apiClient;