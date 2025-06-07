import axios from "axios";

const API_BASE_URL = "https://notehub-public.goit.study/api";
const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

if (!TOKEN) {
  console.error(
    "VITE_NOTEHUB_TOKEN is not defined. Please set it in your .env file."
  );
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
