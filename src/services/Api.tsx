import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

API.interceptors.response.use(

   (response) => response,

   async (error) => {

      const originalRequest = error.config;

      if (error.response.status === 401) {

         const refresh = localStorage.getItem("refresh");

         const response = await axios.post(
            "http://127.0.0.1:8000/api/token/refresh/",
            {
               refresh
            }
         );

         localStorage.setItem("access", response.data.access);

         originalRequest.headers.Authorization =
            `Bearer ${response.data.access}`;

         return API(originalRequest);
      }

      return Promise.reject(error);
   }
  );

export default API;