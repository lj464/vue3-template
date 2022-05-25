<template>
  <div>
    <template>
      <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
        <div>
          <el-tooltip :content="$t('msg.navBar.lang')" :effect="effect">
            <svg-icon id="guide-lang" icon="language" />
          </el-tooltip>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :disabled="language === 'zh'" command="zh">
              中文
            </el-dropdown-item>
            <el-dropdown-item :disabled="language === 'en'" command="en">
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
  </div>
</template>

<script setup>
  const handleSetLanguage = () => {};
</script>

<style scoped></style>
