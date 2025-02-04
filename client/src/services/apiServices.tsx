// /services/apiService.ts
import axios from "./axiosInstance";

export const signIn = async (credentials: Object) => {
  const response = await axios.post("auth/login", credentials);
  return response; // This returns the user data directly
};
export const signUp = async (creditials: Object) => {
  const response = await axios.post("auth/register", creditials);
  return response;
};
export const signOut = async () => {
  // Clear token or perform any necessary logout actions
  localStorage.removeItem("token");
};

export const getJobs = async () => {
  try {
    const response = await axios.get("/jobs");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserProfile = async (userId: string) => {
  try {
    const response = await axios.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
