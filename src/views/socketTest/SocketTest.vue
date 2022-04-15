<template>
  <div>
    <div>SocketTest</div>
    <el-button type="primary" @click="btnClick">点击连接</el-button>
    <el-button type="primary" @click="btnClick2">断开连接</el-button>
    <video src="http://127.0.0.1:8080/rtsp" controls="controls">
      your browser does not support the video tag
    </video> 
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