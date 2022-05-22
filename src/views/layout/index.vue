<template>
  <div class="app-wrapper">
    <sidebar class="sider-bar" />
    <div style="flex:1">
      <navbar  />
      <mainContetn />
    </div>
  </div>
</template>

<script setup>
import sidebar from '@/components/sidebar'
import navbar from '@/components/navbar'
import mainContetn from './components/main.vue'
</script>

<style scoped lang='scss'>
.app-wrapper {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  .sider-bar {
    width: 240px;
  }
}
</style>