import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [{
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login')
    },
    {
        path: '/layout',
        component: () =>
            import ('@/views/layout')
    }
]
const route = createRouter({
    routes,
    history: createWebHashHistory()
})
export default route