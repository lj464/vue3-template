import variables from '@/assets/style/variables.scss'
export default {
    token: (state) => state.login.token,
    userInfo: (state) => state.user.userInfo,
    hasUserInfo: state => {
        return JSON.stringify(state.user.userInfo) !== '{}'
    },
    cssVar: () => variables,
    sidebarOpened: (state) => state.user.siderOped,
    language: state => state.user.currentlan,
};