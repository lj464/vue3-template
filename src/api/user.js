import { request } from '@/request'
export function getUserData() {
    return request.get('/user')
}