import {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosError,
    AxiosResponse,
} from './../../node_modules/axios/index.d';
import axios from 'axios';
import { Endpoints } from '../constants';


const doLogout = (): void => {
    console.error("Token expire - Do logout")
}

const saveToken = (token: string): void => {
    console.log("Save new token to app", token)
}

const baseApiClient: AxiosInstance = axios.create({
    baseURL: Endpoints.baseUrl,
    timeout: 100000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

baseApiClient.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

baseApiClient.interceptors.response.use(
    function (response: AxiosResponse) {
        return response.data;
    },
    function (error) { 
        const config = error.config
        if (error.response?.status !== 401) {
            return Promise.reject(error)
        }

        return axios.post("/refreshToken", { token: "" })
            .then((res: AxiosResponse) => {
                saveToken("new_token")
                config.headers["Authorization"] = "Bearer " + res.data.access_token;
                return baseApiClient(error.response.config)
            })
            .catch((e) => {
                doLogout()
                return Promise.reject(e)
            })
    },
);



// export const common_post

export const common_get = (url: string, params : any) => baseApiClient.get(url, { params }).then((res) => res);

export const common_post = (url: string, params : any) => baseApiClient.post(url, { params }).then((res) => res);

export const common_put = (url: string, params : any) => baseApiClient.put(url, { params }).then((res) => res);

export const common_patch = (url: string, params : any) => baseApiClient.patch(url, { params }).then((res) => res);

export const common_delete = (url: string, params : any) => baseApiClient.delete(url, { params }).then((res) => res);
