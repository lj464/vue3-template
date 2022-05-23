import {
    createApp
} from "vue";
import App from "./App.vue";
import './permission'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/index.scss'
import installIcons from '@/icons'
import store from './store/index'
import router from './router'
const app = createApp(App)
installIcons(app)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount("#app");