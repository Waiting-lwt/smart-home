<template>
  <div style="width: 100%">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column 
        v-for="item in tableItems" 
        :key="item.id" 
        :label="item.label" 
        :prop="item.prop" 
        :formatter="item.formatter"
        :width="item.width? item.width : '80px'"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import tableItems from './tableItems'
export default {
  data() {
    return {
      tableItems: tableItems,
      tableData: [
        {
          id: '7CDFA1D66688',
          voltageA: '暂未接收到数据',
          voltageB: '暂未接收到数据',
          voltageC: '暂未接收到数据',
          currentA: '暂未接收到数据',
          currentB: '暂未接收到数据',
          currentC: '暂未接收到数据',
          activeTotalPower: '暂未接收到数据',
          activePowerA: '暂未接收到数据',
          activePowerB: '暂未接收到数据',
          activePowerC: '暂未接收到数据',
          reactiveTotalPower: '暂未接收到数据',
          reactivePowerA: '暂未接收到数据',
          reactivePowerB: '暂未接收到数据',
          reactivePowerC: '暂未接收到数据',
          apparentTotalPower: '暂未接收到数据',
          apparentPowerA: '暂未接收到数据',
          apparentPowerB: '暂未接收到数据',
          apparentPowerC: '暂未接收到数据',
          factorTotal: '暂未接收到数据',
          factorA: '暂未接收到数据',
          factorB: '暂未接收到数据',
          factorC: '暂未接收到数据',
          angleA: '暂未接收到数据',
          angleB: '暂未接收到数据',
          angleC: '暂未接收到数据',
          neutral: '暂未接收到数据',
          frequency: '暂未接收到数据',
          temperature: '暂未接收到数据',
        }
      ]
    }
  },

  // vue生命周期
  created() {
    this.init()
  },
  destroyed() {
    if(this.$socket){
      this.$socket.disconnect()
    }
    console.log('socket连接已断开')
  },

  methods: {
    init() {
      this.$socket.connect() // socket连接
      console.log('socket连接中')
    }
  },
  sockets: {
    connect() {
      console.log('socket连接成功')
    },
    // 接收power_meter数据
    power_meter(res) {
      let resData = JSON.parse(res).payload.data
      this.$set(this.tableData, 0, {...this.tableData[0], ...resData})
      console.log(resData)
      console.log(this.tableData);
      // console.log('收到数据：', data)
    }
  }
}
</script>

<style>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>