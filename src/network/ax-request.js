import axios from 'axios'

const axRequest = function(config){
    // 1.创建axios实例
    const objAx = axios.create({
        baseURL: 'http://localhost:50510',
        timeout: 5000
    })

    // 2.拦截器
    // 2.1.请求拦截器
    objAx.interceptors.request.use(config => {
        // 暂时不用
        return config
    }, err => {
        console.log(err);
    })

    //2.2.响应拦截器
    objAx.interceptors.response.use( resp => {
        return resp.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return objAx(config)
}


export { axRequest }