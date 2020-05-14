import axios from "axios";

export const apiClient = axios.create({
  baseURL: `${window.location.protocol}//${window.location.host}/api`,
});

export default apiClient;
