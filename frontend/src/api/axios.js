import axios from "axios";

const API_BASE = "https://edviron-software-developer-assessment-tdyc.onrender.com";

const instance = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
