export function requestSuccessFunc (requestObj) {
  // 拦截发送成功请求
  return requestObj;
}

export function requestFailFunc (requestError) {
  // 拦截发送失败： 断网、
  return Promise.reject(requestError);
}

export function responseSuccessFunc (responseObj){
  let resData = responseObj.data;
  if (resData.success) {
    return Promise.resolve(resData);
  }
  return Promise.reject(responseError);
}
export function responseFailFunc (responseError){
  // 响应失败
  return Promise.reject(responseError);
}
