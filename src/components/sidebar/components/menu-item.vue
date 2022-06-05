<template>
    <div>
        <svg-icon :icon="icon" class="menu-item"></svg-icon>
        <span >{{ generateTitle(title) }}</span>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'
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