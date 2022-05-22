import {
    createStore
} from 'vuex'
import login from './modules/login'
import user from './modules/user'
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
        user
    },
    getters
})
export default store