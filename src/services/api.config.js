import axios from "axios";
import { Redirect } from "react-router-dom";


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
        if (data.message === 'Success' && data.status === '200') {
            localStorage.setItem('twtToken', data.token);
        }
        else {
            localStorage.removeItem('twtToken')
            window.location.replace('/')
        }
    }],
});

Object.freeze(apiVar);


export default axiosInst