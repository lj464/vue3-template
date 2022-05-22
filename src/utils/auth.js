// import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
// 超时时长(毫秒) 两小时
const TOKEN_TIMEOUT_VALUE = 2 * 3600 * 1000
import { setItem, getItem } from '@/utils/storag'
/**
 * 获取时间戳
 */
export function getTimeStamp() {
    return getItem('TIME_STAMP')
}
/**
 * 设置时间戳
 */
export function setTimeStamp() {
    setItem('TIME_STAMP', Date.now())
}
/**
 * 是否超时
 */
export function isCheckTimeout() {
    // 当前时间戳
    var currentTime = Date.now()
        // 缓存时间戳
    var timeStamp = getTimeStamp()
    return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}