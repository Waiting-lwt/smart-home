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

// 远程开门
export const openDoor = (data) => request({
  url: '/device/openDoor',
  method: 'get'
})

// 调节灯亮度
export const setLight = (data) => request({
  url: '/device/setLight',
  method: 'post',
  data
})

// 调节窗帘位置
export const setCurtain = (data) => request({
  url: '/device/setCurtain',
  method: 'post',
  data
})