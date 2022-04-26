<template>
  <el-container>
    <el-header class="main-header">
      <div class="logo">智能家居管理系统</div>
      <el-button class="logout-btn" plain @click="handleLogout">登出</el-button>
    </el-header>
    <el-container>
      <el-aside style="width: 250px" >
        <NavMenu/>
      </el-aside>
      <el-main>
        <el-container class="main-container">
          <el-header class="breadcrumb-header">
            <bread-crumb></bread-crumb>
          </el-header>
          <el-main class="content-container">
            <router-view :key="$route.fullpath"></router-view>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import BreadCrumb from '@/layout/breadcrumb/BreadCrumb'
import NavMenu from '@/layout/navMenu/NavMenu'
export default {
  name: 'Fragment',
  components: { NavMenu, BreadCrumb },
  methods: {
    handleLogout() {
      window.localStorage.removeItem("user")
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.main-header{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px !important;
    font-size: 22px;
    color: #fff;
    background-color: #242f42;
  }
  
  .breadcrumb-header {
    height: 30px !important;
  }

  .el-main {
    position: relative;
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

  .main-container {
    height: 100%;
    width: 100%;
  }

  .content-container {
    background-color: white;;
  }
  
  .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }

  .logout-btn {
    float: right;
    margin-top: 15px;
    margin-right: 50px;
  }
</style>