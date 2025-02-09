import axios from "axios";
const axiosInstance = axios.create({
  // @ts-ignore
  baseURL: "https://job-seeker-backend-xnuu.onrender.com/api/",
  timeout: 10000,
});
export default axiosInstance;
