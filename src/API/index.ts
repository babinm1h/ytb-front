import axios from "axios"
import Cookies from "js-cookie"

const SERVER_URL = 'http://localhost:7777';


export const $instance = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true
})


export const $authInstance = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true
})



$authInstance.interceptors.request.use((config) => {
    const token = Cookies.get('ytbToken')
    if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})