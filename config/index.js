export const HOST_PLATFORM = 'WEB'

// 是否为测试
export const IS_DEV = process.env.NODE_ENV === 'development'
// 是否为服务端
export const IS_SERVER = typeof window === 'undefined'

export const AJAX_LOCALLY_ENABLE = true

export const MONITOR_ENABLE = true

export const ROUTER_DEFAULT_CONFIG = {
    waitForData: true,
}

// API 默认配置
export const API_DEFAULT_CONFIG = {
    mack: true,
    sep: '/',
    ip: '10.10.1.20',
    // url: 'http://localhost:3000/api',
    url: IS_SERVER ? 'http://localhost:3000/api' : '/api',
  };
  
export const AXIOS_DEFAULT_CONFIG = {
    timeout: 20000,
    // maxContentLength: 100000,
    header: {},
    baseURL: API_DEFAULT_CONFIG.url,
    withCredentials: true,
}