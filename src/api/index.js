import request from '@/utils/request'

// 登录
export const login = (data) => request({
  url: '/user/login',
  method: 'post',
  data
})

// 获取门禁日志
export const getExtranceLog = (data) => request({
  url: '/device/extranceLog',
  method: 'get'
})

// 获取门禁权限用户
export const getExtranceUsers = (data) => request({
  url: '/device/extranceUsers',
  method: 'get'
})