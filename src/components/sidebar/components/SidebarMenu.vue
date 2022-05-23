<template>
  <!-- 一级 menu 菜单 -->
  <el-menu class="scroll" :default-active="activePath" :unique-opened="true" router
    :background-color="$store.getters.cssVar.menuBg" :collapse="!$store.getters.sidebarOpened"
    :text-color="$store.getters.cssVar.menuText" :active-text-color="$store.getters.cssVar.menuActiveText">
    <el-scrollbar>
      <sidemenu-item v-for="(route) in routeData " :key="route.path" :route="route" />
    </el-scrollbar>
  </el-menu>

</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route.js'
import { computed } from 'vue'
import sidemenuItem from './sidemenuItem.vue'
const router = useRouter()
const Allroutes = router.getRoutes()

const routeData = computed(() => {
  let filroutes = filterRouters(Allroutes)
  return generateMenus(filroutes)
})
const route = useRoute()
const activePath = computed(() => {
  const { path } = route
  return path
})
</script>
<style   scoped >
.scroll {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>