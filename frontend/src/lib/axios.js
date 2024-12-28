import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://e-commerce-j1t0.onrender.com/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;