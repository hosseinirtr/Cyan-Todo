import axios from "axios";
import { useEffect } from "react";
import { backendPort, baseUrl } from "./services/ipConfig";

const instance = axios.create({
  baseURL: baseUrl + backendPort,
});

const AxiosInterceptor = ({ children }) => {
  useEffect(() => {
    const resInterceptor = (response) => {
      return response;
    };

    const errInterceptor = (error) => {
      return Promise.reject(error);
    };

    const interceptor = instance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => instance.interceptors.response.eject(interceptor);
  }, []);
  return children;
};

export default instance;
export { AxiosInterceptor };
