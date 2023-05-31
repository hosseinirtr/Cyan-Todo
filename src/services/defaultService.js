import axios from "axios";
import { backendPort, baseUrl } from "./ipConfig";

console.log(baseUrl, backendPort);
const apiClient = axios.create({
  baseURL: `${baseUrl}:${backendPort}`,
});

export default apiClient;
