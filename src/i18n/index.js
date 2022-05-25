import { createI18n } from 'vue-i18n'
const msg = {
    en: {
        msg: {
            test: "hello"
        }
    },
    zh: {
        msg: {
            test: "你好"
        }
    }
}
const locale = 'en'
const i18n = createI18n({
    legacy: false, //使用commpositionsAPI
    // 全局注入 $t 函数
    globalInjection: true,
    locale,
    msg
})
export default i18n