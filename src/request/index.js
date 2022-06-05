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
        let message = error.message
        if (message.includes('timeout')) {
            message = '请求超时，请重试'
        }
        ElMessage({
            message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
            // return Promise.reject(error)
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
export function tansParams(params) {
    let result = ''
    Object.keys(params).forEach((key) => {
        if (!Object.is(params[key], undefined) && !Object.is(params[key], null) && !Object.is(JSON.stringify(params[key]), '{}')) {
            result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
        }
    })
    return result
}

const prefix = process.env.NODE_ENV === 'development' ? '/v2/' : ''

// 通用下载方法
export function download(url, params, filename) {
    return service.post(prefix + url, params, {
        transformRequest: [(params) => {
            return tansParams(params)
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        responseType: 'blob'
    }).then((data) => {
        const content = data
        const blob = new Blob([content])
        if ('download' in document.createElement('a')) {
            const elink = document.createElement('a')
            elink.download = filename
            elink.style.display = 'none'
            elink.href = URL.createObjectURL(blob)
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href)
            document.body.removeChild(elink)
        } else {
            navigator.msSaveBlob(blob, filename)
        }
    }).catch((r) => {
        console.error(r)
    })
}

export default service