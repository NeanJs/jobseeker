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
