 <template>
  <div class="app-wrapper">
    <sidebar :class="['sider-bar',  $store.getters.sidebarOpened ? 'opensider' : 'didesider']"
      :style="{ backgroundColor: $store.getters.cssVar.menuBg }" />
    <div style="flex:1">
      <navbar />
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
@import '~@/assets/style/variables.scss';

.app-wrapper {
  display: flex;
  // padding: 10px;
  box-sizing: border-box;
  height: 100%;

  .sider-bar {
    height: calc(100%);
    overflow: hidden;
    transition: width 0.5s ;
  }
  .opensider {
    width:$sideBarWidth ;
  }
  .didesider {
    width: $hideSideBarWidth;
  }
}
</style>