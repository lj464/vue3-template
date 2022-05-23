<template>
    <div>
        <el-sub-menu v-if="route.children && route.children.length" :index="route.path">
            <template #title>
                <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
            </template>
            <sidemenu-item v-for="item in route.children" :key="item.path" :route="item"  />
        </el-sub-menu>
        <el-menu-item :index="route.path" v-else>
                <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
        </el-menu-item>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import menuItem from './menu-item.vue'
defineProps({
    route: {
        type: Object,
        reqired: true
    }
})
</script>

<style scoped lang="scss">
</style>