import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/views/layout'
// 公共路由
export const publicRoutes = [
    {
        path: '/login',
        component: () =>
            import(/* webpackChunkName: "login" */ '@/views/login/index')
    },
    {
        path: '/',
        component: layout,
        redirect: '/profile',
        children: [
            {
                path: '/profile',
                name: 'profile',
                component: () =>
                    import(/* webpackChunkName: "profile" */ '@/views/profile/index'),
                meta: {
                    title: 'profile',
                    icon: 'personnel'
                }
            },
            {
                path: '/404',
                name: '404',
                component: () =>
                    import(/* webpackChunkName: "error-page" */ '@/views/error-page/404')
            },
            {
                path: '/401',
                name: '401',
                component: () =>
                    import(/* webpackChunkName: "error-page" */ '@/views/error-page/401')
            }
        ]
    }
]
// 私有路由
import UserManageRouter from './modules/UserManage'
import RoleListRouter from './modules/RoleList'
import PermissionListRouter from './modules/PermissionList'
import ArticleRouter from './modules/Article'
import ArticleCreaterRouter from './modules/ArticleCreate'
export const privateRoutes = [
  UserManageRouter,
  RoleListRouter,
  PermissionListRouter,
  ArticleRouter,
  ArticleCreaterRouter
]

// const routes = [{
//     path: '/',
//     redirect: '/layout'
// },
// {
//     path: '/login',
//     component: () =>
//         import('@/views/login')
// },
// {
//     path: '/layout',
//     component: () =>
//         import('@/views/layout')
// }
// ]
const route = createRouter({
    routes:[...publicRoutes,...privateRoutes],
    history: createWebHashHistory()
})
export default route