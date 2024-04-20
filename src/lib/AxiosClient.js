import axios from "axios";
import { AppEnv } from "../configs/apis";
const getBaseUrl = () => {
    const remoteBaseUrl = "http://dono-03.danbot.host:2640";
    
    const localBaseUrl = "http://localhost:4005";
    const currentEnv  = AppEnv;
    switch (currentEnv) {
        case "prod":
            return remoteBaseUrl;
        default:
            return localBaseUrl;
    }
};

const AxiosClient = axios.create({
    baseURL: getBaseUrl(),
    timeout: 10*1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default AxiosClient;