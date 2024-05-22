import axios from 'axios'

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})
export const useAxiosSecure = () => {

  axiosSecure.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    console.log('interceptor break', token)
    config.headers.authorization = `Bearer ${token}`
    return config
  }, (error)=>{
    return Promise.reject(error)
  })

  // access interceptors 401 403 in not allowed
  axiosSecure.interceptors.response.use((response)=>{
    return response
  }, (err)=>{
    const status = err.response.status;
    console.log(status)

    return Promise.reject(err)
  })

  return  axiosSecure
}
