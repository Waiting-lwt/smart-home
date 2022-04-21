<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><card color='blue' deviceData='111,234' deviceType='Light' deviceMac='123456'>123</card></el-col>
      <el-col :span="6"><card color='green' deviceData='111,234' deviceType='Light' deviceMac='123456'>123</card></el-col>
      <el-col :span="6"><card color='orange' deviceData='111,234' deviceType='Light' deviceMac='123456'>123</card></el-col>
      <el-col :span="6"><card color='red' deviceData='111,234' deviceType='Light' deviceMac='123456'>123</card></el-col>
    </el-row>
    <el-row :gutter="20">
      <div ref="myechart" style="width: 600px; height: 400px"></div>
    </el-row>
  </div>
</template>

<script>
import Card from "@/components/card/Card.vue"
export default {
  components: { Card },
  data() {
    return {
      
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      console.log(this.$refs.myechart)
      let myChart = this.$echarts.init(this.$refs.myechart)
      let option = {
        title: {
          text: 'test'
        },
        tooltip: {},
        legend: { data: ["销量"] },
        xAxis: {
          data: ["A", "B", "C", "D", "E", "F"]
        },
        yAxis: {},
        series: [
          {
            // name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.box-card {
  margin: 0 10px;
}
</style>