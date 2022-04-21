<template>
    <!-- 侧边栏菜单区 -->
    <el-menu
      :default-active="onRoute"
      background-color="#324157"
      text-color="#bfcbd9" 
      active-text-color="#20a0ff"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      :router="true">
      <!-- 遍历菜单数组 -->
      <template v-for="item in menuList">
        <!-- 有子菜单 -->
        <template  v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item v-for="item2 in item.subs" :index="item2.index" :key="item2.index">
              <i :class="item2.icon"></i>
              <span>{{ item2.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <!-- 单独项 -->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
      
    </el-menu>
</template>

<script>
import menuList from '@/layout/navMenu/menuList.js'
export default {
  name: 'NavMenu',
  data(){
    return {
      isCollapse: false,
      menuList
    }
  },
  watch: {

  },
  computed: {
    onRoute() {
      return this.$route.path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$route.path)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo {
  min-height: 100%;
}
.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.el-aside::-webkit-scrollbar {
    width: 0;
}
.el-aside > ul {
    height: 100%;
}
</style>