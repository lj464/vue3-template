<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <!-- 头像 -->
    <breadcrumb class="breadcrumb" />
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <el-avatar
          shape="square"
          :size="40"
          :src="$store.getters.userInfo.avatar"
        ></el-avatar>
        <i class="el-icon-s-tools"></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>{{ $store.getters.userInfo.title }}</el-dropdown-item>
            <el-dropdown-item @click="loginout">退出登录</el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
  import { useStore } from "vuex";
  import Hamburger from "@/components/Hamburger";
  import Breadcrumb from "@/components/Breadcrumb";
  const store = useStore();
  // store.dispatch('login/layout')
  const loginout = () => {
    store.dispatch("login/loginout");
  };
</script>

<style scoped lang="scss">
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      // hover 动画
      transition: background 0.5s;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
    .avatar-container {
      float: right;
      margin-right: 20px;
      margin-top: 5px;
    }
  }
  .breadcrumb {
    float: left;
    line-height: 50px;
  }
</style>
