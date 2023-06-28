import {createRouter,createWebHistory} from "vue-router";
import Login from "../view/Login.vue";
import Home from "../view/Home.vue";
import About from "../view/About.vue";
import Product from "../view/Product.vue";

const routes = [
    {
        path:'/',
        component:Login
    },
    {
        name:'login',
        path:'/login',
        component:Login
    },
    {
        name:'home',
        path:'/home',
        component:Home,
        children:[
            {
                name:'about',
                path:'/home/about',
                meta:{
                    isShow:true
                },
                component:About
            },
            {
                name: 'product',
                path:'/home/product',
                meta:{
                    isShow:true
                },
                component:Product
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
router.beforeEach((to,from,next) => {
    if (to.path == '/' || to.path == '/login'){
        next()
    }else {
        if (localStorage.getItem('token')){
            next()
        }else {
            next('/')
        }
    }
})
export default router
