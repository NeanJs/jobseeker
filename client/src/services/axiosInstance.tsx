import axios from "axios";
const axiosInstance = axios.create({
  // @ts-ignore
  baseURL: process.env.BASER_URL,
  timeout: 10000,
});
export default axiosInstance;
