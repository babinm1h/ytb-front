import axios from "axios";
import Cookies from "js-cookie";

export const SERVER_URL = "https://y0utubeq.herokuapp.com";

export const $instance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

export const $authInstance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

$authInstance.interceptors.request.use((config) => {
  const token = Cookies.get("ytbToken");
  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
