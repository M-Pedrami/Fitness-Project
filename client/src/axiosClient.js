import axios from "axios";
console.log(import.meta.env.VITE_BE_URL)
const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BE_URL || ""}/api`,
  withCredentials: true,
});

export default axiosClient;