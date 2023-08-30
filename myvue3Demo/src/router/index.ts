import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router";
import Login from "../view/Login/Login.vue";
import Main from "../view/main/Main.vue";
import NotFound from "../view/notFound/notFound.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        redirect:'/login',//默认要展示的组件路径
    },
    {
        name: 'main',
        path: '/main',
        component: Main,
        children:[]
    },
    {
        name:'login',
        path:'/login',
        component:Login
    },
]

import cache from "../utils/cache";
import {getAsyncRoutesDate} from "../utils/mapMeunToRoutes.js";
import {useLoginStore} from "../store";


const router = createRouter({
    history:createWebHistory(),
    routes
})

router.addRoute('main',{
    name: 'notFound',
    path:'/:pathMatch(.*)*',
    component:NotFound
})

router.beforeEach((to, from, next) => {
    const loginStore= useLoginStore()
    getAsyncRoutesDate(loginStore.userMenu)
    if (to.path == '/' || to.path == '/login') {
        next()
    } else {
        if (cache.getCache('token')) {
            // getAsyncRoutesDate(cache.getCache('login').userMenu ?? [])
            if (to.path === '/main'){
                //登陆的时候自动跳转到侧边列表的第一个，并高亮显示第一个的tab按钮
                loginStore.activeTab = loginStore.userMenu[0].children[0].id + ''
                next(loginStore.userMenu[0].children[0].url)
            }else {
                next()
            }

        } else {
            next('/')
        }
    }
})

export default router
