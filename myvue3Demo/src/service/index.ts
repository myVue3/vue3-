import axios from "axios";
import {startLoading,endLoading} from "../global/global-elements";
import {open} from "../global/global-elements";
import {AxiosInstance,AxiosRequestConfig} from "axios";
import cache from "../utils/cache";

class Request {
    instance:AxiosInstance;
    constructor(AxiosConfig:AxiosRequestConfig) {
        this.instance = axios.create(AxiosConfig)
        // 添加请求拦截器
        this.instance.interceptors.request.use(
            (config) => {
                // 在发送请求之前做些什么
                // 可以在这里进行请求的预处理，例如添加token等
                config.headers["Authorization"] = `Bearer ${cache.getCache('token')}`; // 如果token存在 注入token
                startLoading('加载中，请稍候')
                return config;

            },
            (error) => {
                // 处理请求错误
                endLoading()
                return Promise.reject(error);
            }
        );

        // 添加响应拦截器
        this.instance.interceptors.response.use(
            (response) => {
                endLoading()
                // 对响应数据做些什么
                return response.data;
            },
            (error) => {
                endLoading()
                open('加载错误，请重试','error')
                // 处理响应错误
                return Promise.reject(error);
            }
        );
    }

    get(url:string,params?:object){
        return new Promise((resolve, reject) => {
            this.instance
                .get(url,{params:params})
                .then((res) => {
                    resolve(res.data)})
                .catch((err) => {
                    reject(err)})
        })
    }
    post(url:string,data?:object,params?:object){
        return new Promise((resolve, reject) => {
            this.instance
                .post(url,data,{params:params})
                .then((res) => {
                    resolve(res.data)})
                .catch((err) => {
                    reject(err)})
        })
    }
    petch(url: string, data?: object, params?: object) {
        return new Promise((resolve, reject) => {
            this.instance
                .patch(url, data, { params: params })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
    delete(url:string,params?:object){
        return new Promise((resolve, reject) => {
            this.instance
                .delete(url,{params:params})
                .then((res) => {
                    resolve(res.data)})
                .catch((err) => {
                    reject(err)})
        })
    }
}

//创建适用于http://codercba.com:5000网站的axios实例
export const service = new Request({
    baseURL:'http://codercba.com:5000',
    timeout:5000,
})


