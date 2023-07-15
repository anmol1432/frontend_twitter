import axios from "axios";
import storageKeys from "./localStorageKeys";

const apiVar = {
    BaseUrl: "https://twt.onrender.com/"
}

const axiosInst = axios.create({
    baseURL: apiVar.BaseUrl,
    timeout: 80000,
    headers: {
        'Content-Type': 'application/json',
        'Cookie': 'token=j%3A%7B%22_id%22%3A%22637bafde8c9dbc0035c0747d%22%2C%22token%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY1YzZiYWVlNWEwZDI5OWVjMDE5ZWEiLCJpYXQiOjE2NjkwNTAzMzR9.Spil5AGMrha8_QprhcjAgb7eo1NRHumlQFXTVhKZgUI%22%7D'
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
    transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        return JSON.stringify({ data });
    }],
});

Object.freeze(apiVar);


export default axiosInst