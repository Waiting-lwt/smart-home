//Breadcrumb.vue
<template>
  <div class="example-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item,index) in breadList"
        :key="index"
        :to="item.path"
      >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: [] // 路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route.name === "dashBoard";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      matched.splice(0,1)
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/home/dashboard", meta: { title: "首页" } }].concat(matched);
      }
      this.breadList = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  }
};
</script>
