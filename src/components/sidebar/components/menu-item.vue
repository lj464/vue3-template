<template>
    <div>
        <svg-icon :icon="icon" class="menu-item"></svg-icon>
        <span >{{ title }}</span>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

</script>
<style lang='scss' scoped>
.menu-item {
    margin-right: 20px;
}
</style>