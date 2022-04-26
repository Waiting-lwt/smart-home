<template>
  <el-collapse v-model="activeCollapse">
    <el-collapse-item name="1">
      <template slot="title">
        灯<icon-svg icon-class="light"></icon-svg>
      </template>
      <div class="slider-box">
        <span class="demonstration">设置亮度</span>
        <el-slider v-model="lightValue" class="slider"></el-slider>
        <el-button class="btn" round size="small"  @click="handleLight">提交</el-button>
      </div>
    </el-collapse-item>
    <el-collapse-item title="反馈 Feedback" name="2">
      <template slot="title">
        窗帘<icon-svg icon-class="curtain"></icon-svg>
      </template>
      <div class="slider-box">
        <span class="demonstration">设置窗帘位置</span>
        <el-slider v-model="curtainValue" class="slider"></el-slider>
        <el-button class="btn" round size="small" @click="handleCurtain">提交</el-button>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import IconSvg from '../../components/icon-svg/IconSvg.vue'
import { setLight, setCurtain } from '@/api/index.js'
export default {
  components: { IconSvg },
  data() {
    return {
      activeCollapse: ['1'],
      lightValue: 0,
      curtainValue:0,
    }
  },
  methods: {
    async handleLight() {
      let res = await setLight({data: this.lightValue, timestamp: this.$moment().format('X')})
      if(res.message = 'OK') {
        this.$message({
          message: '已成功发送设置请求',
          type: 'success'
        })
      } else {
        this.$message({
          message: '请求异常',
          type: 'warning'
        })
      }
    },
    async handleCurtain() {
      let res = await setLight({data: this.curtainValue, timestamp: this.$moment().format('X')})
      if(res.message = 'OK') {
        this.$message({
          message: '已成功发送设置请求',
          type: 'success'
        })
      } else {
        this.$message({
          message: '请求异常',
          type: 'warning'
        })
      }
    },
  }
}
</script>

<style>
.slider-box {
  width: 800px;
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.slider {
  width: 500px;
  /* padding-left: 20px; */
}
.demonstration {
  width: 100px;
}
.btn {
  margin-left: 100px;
}
</style>