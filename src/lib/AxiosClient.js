import axios from "axios";
import { AppEnv } from "../configs/apis";
export const getBaseUrl = () => {
    const remoteBaseUrl = import.meta.env.VITE_API_URL;

    const localBaseUrl = "http://localhost:4005";
    const currentEnv = AppEnv;
    switch (currentEnv) {
        case "production":
            return remoteBaseUrl;
        default:
            return localBaseUrl;
    }
};

const AxiosClient = axios.create({
    baseURL: "/api",
    timeout: 10 * 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosClient;
