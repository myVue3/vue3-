import router from "../router";


//vite导入组件方法，会按需加载
const modules = import.meta.glob('../view/main/**/**/*.vue')

export function getAsyncRoutesDate(data) {
    data.map((item) => {
        if (item.type === 1){
            getAsyncRoutesDate(item.children)
        }else {
            let asyncRoute = {}
            const length = item.url.split('/').length
            asyncRoute = {
                name:item.name,
                path:item.url,
                component:modules[(`../view${item.url}/${item.url.split('/')[length-1]}.vue`)]
            }
            router.addRoute('main',asyncRoute)
        }
    })
}

//给面包屑组件传递要展示参数
// export function getBreadcrumb(myMenus,currentUrl){
//     console.log(currentUrl)
//     console.log(myMenus)
//     let breadArray = []
//     for (const menu of myMenus){
//         if (menu.type === 1){
//             let findMenu = getBreadcrumb(menu.children ?? [],currentUrl)
//             console.log(findMenu)
//             if (findMenu) {
//                 breadArray?.push({ name: menu.name })
//                 breadArray?.push({ name: findMenu.name })
//                 return findMenu
//             }
//         }else if (menu.type === 2 && menu.url === currentUrl){
//             return menu
//         }
//     }
//     return breadArray
// }
export function pathMapToMenu(userMenus, currentPath, breadcrumbs) {
    for (const menu of userMenus) {
        if (menu.type === 1) {
            const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
            if (findMenu) {
                breadcrumbs?.push({ name: menu.name })
                breadcrumbs?.push({ name: findMenu.name })
                return findMenu
            }
        } else if (menu.type === 2 && menu.url === currentPath) {
            return menu
        }
    }
}
export function getBreadcrumb(userMenus, currentPath) {
    const breadcrumbs = []
    pathMapToMenu(userMenus, currentPath, breadcrumbs)
    return breadcrumbs
}
//将登陆用户的按钮权限进行整合
export function getButtonPermission(userMenus){
    const permission = []
    //递归获取所有按钮权限
    const _recurseGetPermission = (menus) => {
        for (const menu of menus){
            if (menu.type === 1 || menu.type === 2){
                _recurseGetPermission(menu.children??[])
            }else if (menu.type === 3){
                permission.push(menu.permission)
            }
        }
    }
    _recurseGetPermission(userMenus)
    return permission
}
