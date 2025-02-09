import axios from "axios";
const axiosInstance = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_BASER_URL,
  timeout: 10000,
});
export default axiosInstance;
