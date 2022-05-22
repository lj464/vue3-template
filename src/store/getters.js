export default {
    token: (state) => state.login.token,
    userInfo: (state) => state.user.userInfo,
    hasUserInfo: state => {
        return JSON.stringify(state.user.userInfo) !== '{}'
    },
};