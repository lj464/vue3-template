import axios from 'axios'
import { isCheckTimeout } from "@/utils/auth";
import store from '@/store'
import { ElMessage } from 'element-plus'
const request = axios.create({
    baseURL: 'http://127.0.0.1:1234',
    timeout: 5000
})

request.interceptors.request.use(
    (config) => {
        if (store.getters.token) {
            if (isCheckTimeout()) {
                // 登出操作
                store.dispatch('login/loginout')
                return Promise.reject(new Error('token 失效'))
            }
            // console.log('store.getters.token', store.getters.token)
            // 如果token存在 注入token
            config.headers.Authorization = `Bearer ${store.getters.token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
request.interceptors.response.use(
    (response) => {
        const { success, message, data } = response.data
            //   要根据success的成功与否决定下面的操作
        if (success) {
            return data
        } else {
            // 业务错误
            ElMessage.error(message) // 提示错误消息
            return Promise.reject(new Error(message))
        }
    },
    (error) => {
        // 处理 token 超时问题
        if (
            error.response &&
            error.response.data &&
            error.response.data.code === 401
        ) {
            // token超时
            store.dispatch('user/logout')
        }
        ElMessage.error(error.message) // 提示错误信息
        return Promise.reject(error)
    }
)
export { request }