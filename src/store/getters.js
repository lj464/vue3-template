import { generateColors } from '@/utils/theme'
export default {
    token: (state) => state.login.token,
    userInfo: (state) => state.user.userInfo,
    hasUserInfo: state => {
        return JSON.stringify(state.user.userInfo) !== '{}'
    },
    cssVar: (state) => {
        return {
            ...state.theme.variables,
            ...generateColors(state.theme.mainColor)
        }
    },
    sidebarOpened: (state) => state.user.siderOped,
    language: state => state.user.currentlan,
    mainColor: state => state.theme.mainColor,
};