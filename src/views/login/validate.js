import i18n from '@/i18n'
export function validatePass() {
    return (rule, value, callback) => {
        if (value.length < 3) {
            callback(new Error(i18n.global.t('msg.login.passwordRule')))
        } else {
            callback()
        }
    }
}