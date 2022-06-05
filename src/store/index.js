import {
    createStore
} from 'vuex'
import login from './modules/login'
import user from './modules/user'
import theme from './modules/theme'
import getters from './getters'
const store = createStore({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        login,
        user,
        theme
    },
    getters
})
export default store