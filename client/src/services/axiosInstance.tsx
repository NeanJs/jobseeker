import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/", // Set your base URL here
  timeout: 10000, // Set a timeout if desired
});
// Request interceptor to add token to headers if exists
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token"); // Replace with your token storage logic
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`; // Add token to headers
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error); // Handle request error
//   }
// );

// // Response interceptor for handling responses
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response.data; // Return the response data directly
//   },
//   (error) => {
//     // Handle errors globally
//     const { response } = error;
//     if (response && response.status === 401) {
//       // Handle unauthorized access, redirect to login, etc.
//       console.error("Unauthorized, redirecting to login...");
//       // Optionally, you could redirect to login page or dispatch logout action here
//     }
//     return Promise.reject(error); // Reject the promise to allow further handling
//   }
// );

export default axiosInstance;
