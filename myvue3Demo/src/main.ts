import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import {registerProperties} from "./global/properties-funcitons/register-properties";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// main.ts/main.js
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-message-box.css";
import "element-plus/theme-chalk/el-menu.css";
import "element-plus/theme-chalk/el-menu-item.css";
import "element-plus/theme-chalk/el-sub-menu.css";

const app = createApp(App)

const pinia = createPinia()
//使用pinia持久化存储插件
pinia.use(piniaPluginPersistedstate)
app.use(registerProperties)
app.use(pinia)
app.use(router)
app.mount('#app')
