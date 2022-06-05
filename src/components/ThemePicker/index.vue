<template>
    <div>
        <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSetTheme">
            <div>
                <el-tooltip :content="$t('msg.navBar.themeChange')">
                    <svg-icon id="guide-theme" icon="change-theme" class="icon" />
                </el-tooltip>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="color">
                        {{ $t('msg.theme.themeColorChange') }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <div>
            <color-diolag v-model="showModel" />
        </div>
    </div>

</template>
<script setup>
import { onMounted, ref } from 'vue';
import colorDiolag from './component/colorDiolag.vue'
onMounted(() => { });
const showModel = ref(false)
const handleSetTheme = () => {
    showModel.value = true
}
</script>
<style lang='scss' scoped>
</style>