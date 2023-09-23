import axios from "axios";

let token = localStorage.getItem("token");
if (token === null) token = "";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
});

export default axiosInstance;
