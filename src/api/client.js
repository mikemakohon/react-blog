import axios from "axios";

export const client = axios.create();
client.defaults.baseURL = "https://fakerestapi.azurewebsites.net/api/v1";

// client.interceptors.response.use(
//   (response) => response.data,
//   (response) => Promise.reject(response.response.data)
// );

export default client;
