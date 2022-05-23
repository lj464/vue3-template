<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{
          item.meta.title
        }}</span>
        <!-- 可点击项 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
          item.meta.title
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script setup>
  import { useRoute, useRouter } from "vue-router";
  import { watch, ref } from "vue";
  import { useStore } from "vuex";
  const routes = useRoute();
  const breadcrumbData = ref([]);
  const getmatchroute = function () {
    breadcrumbData.value = routes.matched.filter((item) => item.meta && item.meta.title);
  };
  watch(
    routes,
    () => {
      getmatchroute();
    },
    {
      immediate: true,
    }
  );

  // 处理点击事件
  const router = useRouter();
  const onLinkClick = (item) => {
    router.push(item.path);
  };

  // 将来需要进行主题替换，所以这里获取下动态样式
  const store = useStore();
  // eslint-disable-next-line
  const linkHoverColor = ref(store.getters.cssVar.menuBg);
</script>

<style scoped lang="scss">
  .breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;

    .no-redirect {
      color: #97a8be;
      cursor: text;
    }

    .redirect {
      color: #666;
      font-weight: 600;
    }

    .redirect:hover {
      // 将来需要进行主题替换，所以这里不去写死样式
      color: v-bind(linkHoverColor);
    }
  }
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s;
  }

  .breadcrumb-enter-from,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(5px);
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
</style>
