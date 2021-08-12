import axios from "axios";

export const BASE_URL = "https://api-dev.domecompass.com";
export const LS_Auth_Token = "auth_token";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_Auth_Token);
  if (!token) return config;
  return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
  console.log(error);
  if (error.response.data?.code === 9101) {
    localStorage.removeItem(LS_Auth_Token);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});
