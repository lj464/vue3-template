import { setItem, getItem,removeItem } from '@/utils/storag.js'
import { ElMessage } from 'element-plus'
import router from '@/router/index'
// import i18n from '@/i18n'
// import { useI18n } from 'vue-i18n'
// const i18n = useI18n()
export default {
    namespaced: true,
    state: {
        token: getItem('token')
    },
    mutations: {
        setToken(state, paloyd) {
            setItem('token', paloyd)
            state.token = paloyd
        }
    },
    actions: {
        login(store, { user, password }) {
            return new Promise((resolve, reject) => {
                if (password === '123') {
                    setTimeout(() => {
                        ElMessage.success('登录成功')
                        store.commit('setToken', user)
                        resolve(true)
                    }, 1500);
                } else {
                    reject(false)
                    ElMessage('别点了:密码为123')
                }
            })
        },
        loginout({ commit }) {
            commit('setToken', '')
            removeItem('token')
            removeItem('TIME_STAMP')
            router.push('/login')
        }
    }
}