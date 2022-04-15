// 封装请求
import axios from 'axios'
import { Message } from 'element-ui'
// 请求
const http = axios.create({
    baseURL: "http://127.0.0.1:5000",
    timeout: 6000
})

http.interceptors.response.use(res => {
  return res.data
}, err => {
  if(err.response.status == 404) {
    Message.error({message: '找不到服务器！'}) 
  }
  return Promise.resolve(err.response.data.msg)
})

// 封装请求参数
function request({ method='get', url, data={}, params={} }){
  return http({
    method,
    url,
    data,
    params
  })
}



// 返出
export default request