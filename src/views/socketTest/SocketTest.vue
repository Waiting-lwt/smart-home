<template>
  <div>
    <div>SocketTest</div>
    <el-button type="primary" @click="btnClick">点击连接</el-button>
    <el-button type="primary" @click="btnClick2">断开连接</el-button>
    <img src="http://localhost:5000/cam/rtsp" width="1200px" height="800px"/>
  </div>
</template>

<script>
export default {
  name: 'SocketTest',
  data() {
    return {
    }
  },
  methods: {
    btnClick: function() {
      this.$socket.connect() // socket连接
      this.$socket.emit('my_event', '请求连接')  // 发送消息:对应后端my_event测试函数
      console.log('连接中')
    },
    btnClick2: function() {
      this.$socket.disconnect() // 断开socket连接
      this.$router.push({path: '/dashboard'})
      console.log('已断开连接')
    }
  },
  sockets: {
    connect() {
      console.log('连接成功')
    },
    my_response(data) {
      console.log('接收到my_response消息：', data)
    },
    power_meter(data) {
      console.log('收到数据：', JSON.parse(data))
    }
  },
  mounted () {    // 在组件开始渲染时进行调用
    
  },
  // beforeDestroy () {    // 当离开组件时，结束调用
  //   if (this.$socket) this.$socket.disconnect()  // 如果socket连接存在，销毁socket连接
  //   console.log('连接已断开')
  // }

}
</script>

<style scoped>

</style>