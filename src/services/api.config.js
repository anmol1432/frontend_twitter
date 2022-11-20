import axios from "axios";
import { Redirect } from "react-router-dom";
import storageKeys from "./localStorageKeys";

const apiVar = {
    BaseUrl: "http://localhost:5000/"
}

const axiosInst = axios.create({
    baseURL: apiVar.BaseUrl,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*'
    },
    transformResponse: [function (data) {
        // Do whatever you want to transform the data
        data = JSON.parse(data);
        if (data.token) {
            localStorage.setItem(storageKeys.token, data.token);
            return true
        }
        else {
            localStorage.removeItem('twtToken')
            window.location.replace('/login')
        }
    }],
});

Object.freeze(apiVar);


export default axiosInst