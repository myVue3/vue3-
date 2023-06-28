import axios from "axios";
import { ElLoading } from 'element-plus'

const service = axios.create({
    baseURL:'https://admin.study65.com/api',
    timeout:5000,
    headers:{
        Authorization:'92697bbf-bc6e-4b66-a446-89aed3f30b4f'
    }
})
let myLoading
function startLoading() {
    myLoading = ElLoading.service()
}
function endLoading() {
    myLoading.close()
}
service.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // 可以在这里进行请求的预处理，例如添加token等
        startLoading()
        return config;
    },
    (error) => {
        // 处理请求错误
        endLoading()
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {
        endLoading()
        // 对响应数据做些什么
        return response.data;
    },
    (error) => {
        endLoading()
        // 处理响应错误
        return Promise.reject(error);
    }
);

export default service
