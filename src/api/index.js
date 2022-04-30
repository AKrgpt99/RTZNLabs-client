import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://localhost:3000/api/";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export default axiosClient;