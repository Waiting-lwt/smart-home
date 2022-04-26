<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><card color='blue' :deviceData='humidity.data' deviceType='湿度Humidity' :deviceMac='humidity.mac'></card></el-col>
      <el-col :span="6"><card color='green' :deviceData='temperature.data' deviceType='温度Temperature' :deviceMac='temperature.mac'></card></el-col>
      <el-col :span="6"><card color='orange' :deviceData='light_intensity.data' deviceType='光照强度Light Intensity' :deviceMac='light_intensity.mac'></card></el-col>
      <el-col :span="6"><card color='red' :deviceData='PM2_5.data' deviceType='PM2.5' :deviceMac='PM2_5.mac'></card></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><card color='blue' :deviceData='TVOC.data' deviceType='总挥发性有机物TVOC' :deviceMac='TVOC.mac'></card></el-col>
      <el-col :span="6"><card color='green' :deviceData='powerTotal.data' deviceType='家庭电表总功率' :deviceMac='powerTotal.mac'></card></el-col>
      <el-col :span="6"><card color='orange' :deviceData='factorTotal.data' deviceType='家庭电表总功率因数' :deviceMac='factorTotal.mac'></card></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div ref="voltageChart" style="width: 500px; height: 500px"></div></el-col>
      <el-col :span="6"><div ref="currentChart" style="width: 500px; height: 500px"></div></el-col>
      <el-col :span="6"><div ref="powerChart" style="width: 500px; height: 500px"></div></el-col>
      <el-col :span="6"><circle-button class="open-button" @click.native="handleButton"></circle-button></el-col>
    </el-row>
  </div>
</template>

<script>
import Card from "@/components/card/Card.vue"
import CircleButton from '@/components/circleButton/CircleButton.vue'
import { voltageData ,voltageOption, currentData, currentOption, powerData, powerOption } from '@/views/dashboard/chartOption.js'
import { openDoor } from '@/api/index.js'
export default {
  components: { Card, CircleButton },
  data() {
    return {
      voltageChart: null,
      currentChart: null,
      powerChart: null,
      // 电表电压
      voltageData,
      currentData,
      powerData,
      powerTotal: {
        mac: '7CDFA1B52338',
        data: '未接收到数据'
      },
      factorTotal: {
        mac: '7CDFA1B52338',
        data: '未接收到数据'
      },
      temperature: {
        mac: '未知',
        data: '未接收到数据'
      },
      humidity: {
        mac: '未知',
        data: '未接收到数据'
      },
      light_intensity: {
        mac: '未知',
        data: '未接收到数据'
      },
      PM2_5: {
        mac: '未知',
        data: '未接收到数据'
      },
      TVOC: {
        mac: '未知',
        data: '未接收到数据'
      },
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.voltageChart = this.$echarts.init(this.$refs.voltageChart)
      this.currentChart = this.$echarts.init(this.$refs.currentChart)
      this.powerChart = this.$echarts.init(this.$refs.powerChart)
      this.voltageChart.setOption(voltageOption)
      this.currentChart.setOption(currentOption)
      this.powerChart.setOption(powerOption)
    },
    formatterData(cellValue, type) {
      if(type == 'voltage') {
        return (parseFloat(cellValue) * 0.1).toFixed(1)
      } else if(type == 'current'){
        return (parseFloat(cellValue) * 0.001).toFixed(3)
      } else if(type == 'power'){
        return  (parseFloat(cellValue) * 0.1).toFixed(1)
      } else if(type == 'factor'){
        return  (parseFloat(cellValue) * 0.001).toFixed(3)
      }
    },
    async handleButton() {
      await openDoor()
      this.$message('已发送开门指令')
    }
  },
  sockets: {
    connect() {
      console.log('socket连接成功')
    },
    // 接收power_meter数据
    power_meter(res) {
      let resData = JSON.parse(res).payload
      if(resData.data_type == 'voltage') {
        let voltageData = this.voltageData
        voltageData[0].value = this.formatterData(resData.data.voltageA, 'voltage')
        voltageData[1].value = this.formatterData(resData.data.voltageB, 'voltage')
        voltageData[2].value = this.formatterData(resData.data.voltageC, 'voltage')
        this.voltageChart.setOption({
          series: {
            data: voltageData
          }
        })
      } else if(resData.data_type == 'current') {
        let currentData = this.currentData
        currentData[0].value = this.formatterData(resData.data.currentA, 'current')
        currentData[1].value = this.formatterData(resData.data.currentB, 'current')
        currentData[2].value = this.formatterData(resData.data.currentC, 'current')
        this.currentChart.setOption({
          series: {
            data: currentData
          }
        })
      } else if(resData.data_type == 'active_power') {
        let powerData = this.powerData
        this.powerTotal.data = this.formatterData(resData.data.powerTotal, 'power') + 'W'
        powerData[0].value = this.formatterData(resData.data.powerA, 'power')
        powerData[1].value = this.formatterData(resData.data.powerB, 'power')
        powerData[2].value = this.formatterData(resData.data.powerC, 'power')
        this.powerChart.setOption({
          series: {
            data: powerData
          }
        }) 
      } else if(resData.data_type == 'factor') {
        this.factorTotal.data = this.formatterData(resData.data.factorTotal, 'factor')
      }
    },
    temperature_humidity(res) {
      res = JSON.parse(res)
      this.temperature.mac = res.device_mac
      this.temperature.data = res.data.temperature + '℃'
      this.humidity.mac = res.device_mac
      this.humidity.data = res.data.humidity + '%'
    },
    light_intensity(res) {
      res = JSON.parse(res)
      this.light_intensity.mac = res.device_mac
      this.light_intensity.data = res.data.light_intensity + 'lux'
    },
    PM2_5(res) {
      res = JSON.parse(res)
      this.PM2_5.mac = res.device_mac
      this.PM2_5.data = res.data.dust + 'mg/m3'
    },
    TVOC(res) {
      res = JSON.parse(res)
      this.TVOC.mac = res.device_mac
      this.TVOC.data = res.data.voc_index + 'ppm'
    },
    openDoorCondition(res) {
      if(res == 'success') {
        this.$message({
          message: '远程开门成功！',
          type: 'success'
        });
      } else {
        this.$message({
          message: '远程开门失败！详情请看日志',
          type: 'warning'
        });
      }
    }
  },
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
.open-button {
  position: relative;
  top: 320px;
  left: 80px;
}
</style>