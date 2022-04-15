// 侧边栏菜单menuList
export default [
  {
    icon: 'el-icon-s-platform',
    index: '/',
    title: '电表控制',
    subs: [
      {
        icon: 'el-icon-menu',
        index: '/meterData',
        title: '电表参数',
      },
      {
        icon: 'el-icon-menu',
        index: '/socketTest',
        title: '测试Socket',
      },
    ]
  }
]