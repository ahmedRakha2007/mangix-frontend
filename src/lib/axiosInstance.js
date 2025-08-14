import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
 const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {"X-API-KEY" : apiKey}
});

export default axiosInstance;