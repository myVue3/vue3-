import {service} from "../index";
import {api} from "../api";



//登陆方法
export function login(accountInfo) {
    // 返回一个有结果的promise
    return service.post(api.LOGIN,accountInfo)
}

//获取用户信息
export function userInfo(id:number) {
    return service.get(api.USER + id)
}

//获取用户菜单树
export function userMenus(id:number) {
    return service.get(api.USER_MENU + id + '/menu')
}

//获取所有菜单树
export function getMenuList() {
    return service.post(api.MENU_LIST)
}

//获取用户权限id信息
export function getUserRoleId(id:number) {
    return service.get(api.USER_MENU_ID + id + '/menuIds')
}
//根据传入内容动态获取列表内容



//退出登录方法
export function loginOut(){
    return service.get('/school')
}
