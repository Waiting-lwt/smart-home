<template>
  <el-container>
    <el-header>
      <div class="logo">智能家居管理系统</div>
    </el-header>
    <el-container>
      <el-aside style="width: 250px" >
        <NavMenu/>
      </el-aside>
      <el-main>
        <router-view :key="$route.fullpath"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '@/layout/navMenu/NavMenu'
export default {
  name: 'Fragment',
  components: { NavMenu }
}
</script>

<style scoped>
.el-header{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px !important;
    font-size: 22px;
    color: #fff;
    background-color: #242f42;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container {
    height: 100%;
    width: 100%;
  }

  
  .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }
</style>