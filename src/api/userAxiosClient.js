import axios from 'axios';

const userAxiosClient = axios.create({
  baseURL: 'https://60c189bf4f7e880017dbfc97.mockapi.io/',
  headers: {
    'Content-Type': 'aplication/json',
  },
});
//Interceptors
// Add a request interceptor
userAxiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
userAxiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default userAxiosClient;
