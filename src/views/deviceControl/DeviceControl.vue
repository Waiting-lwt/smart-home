<template>
  <el-collapse v-model="activeCollapse" @change="handleChange">
  <el-collapse-item name="1">
    <template slot="title">
      灯<icon-svg icon-class="light"></icon-svg>
    </template>
    <div class="slider-box">
      <span class="demonstration">亮度</span>
      <el-slider v-model="value1" class="slider"></el-slider>
    </div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <template slot="title">
      窗帘<icon-svg icon-class="curtain"></icon-svg>
    </template>
    <div class="slider-box">
      <span class="demonstration">窗帘位置</span>
      <el-slider v-model="value1" class="slider"></el-slider>
    </div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
</template>

<script>
import IconSvg from '../../components/icon-svg/IconSvg.vue'
export default {
  components: { IconSvg },
  data() {
    return {
      activeCollapse: ['1'],
      value1: 0
    }
  },
  methods: {
    handleChange() {

    }
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
  width: 70px;
}

</style>