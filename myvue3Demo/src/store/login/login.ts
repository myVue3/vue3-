import {defineStore} from "pinia";
import {login, userInfo, userMenus} from "../../service/login/login";
import {open} from "../../global/global-elements";

import cache from "../../utils/cache";
import {getAsyncRoutesDate, getButtonPermission} from "../../utils/mapMeunToRoutes.js";


export const useLoginStore = defineStore('login',{
    state:() => {
        return {
            //控制记住密码选择显示
            isChecked:false,
            token:'',
            useId:'',
            userInfo:{},
            userMenu:{},
            isCollapse:false,
            activeTab:'2',
            buttonPermission:[]
        }
    },
    getters:{},
    actions:{
        accountLogin: async function(accountInfo) {
            const accountToken = await login(accountInfo)
            this.token = accountToken.token
            this.useId = accountToken.id
            cache.setCache('token',this.token)
            open('登陆成功','success')
        },
        getUserInfo: async function() {
            this.userInfo = await userInfo(this.useId)
        },
        getUserMenu: async function() {
            this.userMenu = await userMenus(this.userInfo.role.id)
            await getAsyncRoutesDate(this.userMenu)
            this.buttonPermission = getButtonPermission(this.userMenu)
            console.log(this.buttonPermission)
        },
    },
    persist:{
        storage:localStorage,
        paths:['count','visited','isChecked','token','userInfo','userMenu','activeTab','buttonPermission']
    },

})