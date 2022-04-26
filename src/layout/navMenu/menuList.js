// 侧边栏菜单menuList
export default [
  {
    icon: 'el-icon-s-home',
    index: '/home/dashboard',
    title: '我的设备'
  },
  {
    icon: 'el-icon-key',
    index: '/home/entrance',
    title: '门禁管理',
    subs: [
      {
        icon: 'el-icon-s-custom',
        index: '/home/entrance-authority',
        title: '门禁权限',
      },
      {
        icon: 'el-icon-document',
        index: '/home/entrance-log',
        title: '门禁日志',
      }
    ]
  },
  // {
  //   icon: 'el-icon-s-platform',
  //   index: '/home/meter',
  //   title: '电表控制',
  //   subs: [
  //     {
  //       icon: 'el-icon-menu',
  //       index: '/home/meterData',
  //       title: '电表参数',
  //     },
  //     {
  //       icon: 'el-icon-menu',
  //       index: '/home/socketTest',
  //       title: '测试Socket',
  //     },
  //   ]
  // },
  {
    icon: 'el-icon-video-camera',
    index: '/home/monitor',
    title: '视频监控',
  },
  {
    icon: 'el-icon-set-up',
    index: '/home/device-control',
    title: '设备操控',
  } 
]