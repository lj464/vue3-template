
    <template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <el-tooltip :content="$t('msg.navBar.lang')" :effect="effect">
        <svg-icon id="guide-lang" class="icon" icon="language" />
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

<script setup>
import { defineProps ,computed } from 'vue'
import {useStore} from 'vuex'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value) {
      // 这个值必须匹配下列字符串中的一个
      return ['dark', 'light'].indexOf(value) !== -1
    }
  }
})
const store = useStore()
const i18n = useI18n()
const handleSetLanguage = (data) => {
  i18n.locale.value = data
  store.commit('user/setCurrentLan' ,data)
  ElMessage.success('切换语言成功')
};
const language = computed(()=>store.getters.language)
</script>

<style scoped>
.icon {
  font-size: 20px;
}
</style>
