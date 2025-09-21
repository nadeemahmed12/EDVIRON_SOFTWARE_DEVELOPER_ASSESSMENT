import axios from "axios";

const API_BASE = "http://localhost:5000";

const instance = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
