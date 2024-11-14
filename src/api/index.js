import axios from "axios";

export const Api = () => axios.create({
    validateStatus: status => status < 299 && status > 100,
    timeout: 120_000,
    baseURL: "http://localhost:5777/api/",
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});