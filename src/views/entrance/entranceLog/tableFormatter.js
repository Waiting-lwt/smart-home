export default [
  {
    prop: 'id',
    label: 'id',
    formatter: function (row, col, cellValue, index) {
      return cellValue
    },
    tag: false
  },
  {
    prop: 'device_id',
    label: '设备ID',
    formatter: function (row, col, cellValue, index) {
      return cellValue
    },
    tag: false
  },
  {
    prop: 'device_mac',
    label: '设备MAC地址',
    formatter: function (row, col, cellValue, index) {
      return cellValue
    },
    tag: false
  },
  {
    prop: 'event',
    label: '开门事件类型',
    event: function (row, col, cellValue, index) {
      if(cellValue == 'card') {
        return '门卡开门'
      } else if(cellValue == 'button'){
        return '开门按钮开门'
      } else if(cellValue == 'remote'){
        return '远程开门'
      } else if(cellValue == 'unknow'){
        return '未知方式'
      }
    },
    tag: false
  },
  {
    prop: 'card_id',
    label: '门卡ID',
    formatter: function (row, col, cellValue, index) {
      if(cellValue == 'unknow') {
        return '未知'
      }
      return cellValue
    },
    tag: false
  },
  {
    prop: 'card_label',
    label: '门卡名称',
    formatter: function (row, col, cellValue, index) {
      if(cellValue == 'unknow') {
        return '未知'
      }
      return cellValue
    },
    tag: false
  },
  {
    prop: 'action',
    label: '开门处理结果',
    formatter: function (row, col, cellValue, index) {
      // if(cellValue == 'accept') {
      //   return <el-tag type="success">接收</el-tag>
      // } else if(cellValue == 'deny') {
      //   return <el-tag type="warning">拒绝</el-tag>
      // } else if(cellValue == 'alarm') {
      //   return <el-tag type="danger">报警！</el-tag>
      // } else if(cellValue == 'expire') {
      //   return <el-tag type="info">过期</el-tag>
      // }
      return cellValue
    },
    tag: true
  },
]