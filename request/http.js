import axios from 'axios'
import { requestFailFunc, requestSuccessFunc, responseFailFunc, responseSuccessFunc } from "./interceptors";
import { AXIOS_DEFAULT_CONFIG } from "../config";
const axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG);
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc);
/**
 *
 *
 * @export
 * @param {({ url: '', method: '', data: {}}|String)} params 参数
 * @returns
 */
export default async function http (params) {
    let ctx = {}
    typeof params === 'string' ? ctx.url = params : ctx = params
    const method = ctx.method || 'GET'
    const post = method.toUpperCase() === 'POST' && ctx.data
    const get = method.toUpperCase() === 'GET' && ctx.data
    const url = ctx.url
    console.log(url)
    const res = await axiosInstance({
        url: url,
        method: method,
        params: get,
        data: post
    })
    return res;
}

export {
    axiosInstance
}