<template>
  <div>
    <div class="logo-container">
      <el-avatar :size="logoHeight" shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png" />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">后台管理</h1>
    </div>
    <sidebar-menu />
  </div>
</template>

<script setup>
import SidebarMenu from "./components/SidebarMenu.vue";
const logoHeight = 54;
</script>

<style scoped lang="scss">
// @import '~@/assets/style/variables.scss';

.logo-container {
  height: v-bind(logoHeight) + "px";
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
