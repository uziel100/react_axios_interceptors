import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { getValidatorError, SnackbarUtilities } from "../utils";

export const AxiosInterceptor = () => {

  const updateHeader = (request: AxiosRequestConfig) => {
    const token = "hehehjejej23k23k2k32lk323";

    const newHeaders = {
      Authorization: token,
      'Content-Type': 'application/json'
    }

    request.headers = newHeaders;
    return request;
  }

  axios.interceptors.request.use((request: AxiosRequestConfig) => {
    console.log('interceptor reading...')
    return updateHeader(request);
  })


  axios.interceptors.response.use((response: AxiosResponse) => {
    console.log("🚀 ~ file: axios.interceptor.tsx ~ line 24 ~ axios.interceptors.request.use ~ response", response)
    
    return response;
  }, (error) => {
    SnackbarUtilities.error(getValidatorError(error.code))
    return Promise.reject(error)
  })
}