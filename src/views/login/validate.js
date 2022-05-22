export function validatePass() {
    return (rule, value, callback) => {
        if (value.length < 3) {
            callback(new Error('密码最少三位数'))
        } else {
            callback()
        }
    }
}