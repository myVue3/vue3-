import {defineStore} from "pinia";
import {deletePageData, getList, createPageData, editPageData} from "../../../service/main/system/system";
import {open} from "../../../global/global-elements";


export const useSystemStore = defineStore('system',{
    state:() => {
        return {
            usersList:[],
            usersCount:0,
            roleList:[],
            roleCount:0,
            departmentList:[],
            departmentCount:0,
            menuList:[],
            menuCount:0,
            goodsList:[],
            goodsCount:0,
            currentPage:1,
            pageSize:10
        }
    },
    getters:{
        //根据传入的pageName展示state里面对应的list数据
        listData: (state) => {
            return (pageName) => {
                return state[`${pageName}List`]
            }
        },
        listCount: (state) => {
            return (pageName) => {
                return state[`${pageName}Count`]
            }
        }
    },
    actions:{
        async getPageList(searchInfo){
            let pageUrl = ''
            //根据传入的pageName来决定发送哪一条url
            switch (searchInfo.pageName) {
                case 'users':
                    pageUrl = '/users/list'
                    break
                case 'role':
                    pageUrl = '/role/list'
                    break
                case 'department':
                    pageUrl = '/department/list'
                    break
                case 'menu':
                    pageUrl = '/menu/list'
                    break
                case 'goods':
                    pageUrl = '/goods/list'
                    break
            }
            //解构出返回的list和totalCount
            const { list,totalCount } = await getList(pageUrl,searchInfo.queryInfo)
            switch (searchInfo.pageName) {
                case 'users':
                    this.usersList = list
                    this.usersCount = totalCount
                    break
                case 'role':
                    this.roleList = list
                    this.roleCount = totalCount
                    break
                case 'department':
                    this.departmentList = list
                    this.departmentCount = totalCount
                    break
                case 'menu':
                    this.menuList = list
                    this.menuCount = totalCount
                    break
                case 'goods':
                    this.goodsList = list
                    this.goodsCount = totalCount
                    break
            }
            console.log(list,totalCount)
        },
        async deletePageDataAction(pageName,row){
            await deletePageData(`/${pageName}/${row.id}`)
            await this.getPageList({
                pageName:pageName,
                queryInfo:{
                    size:this.pageSize,
                    offset:this.pageSize * (this.currentPage - 1),
                }
            })
            open('删除成功~',"success")
        },
        async createPageDataAction(pageName,queryInfo){
            await createPageData(`/${pageName}`,queryInfo)
            await this.getPageList({
                pageName:pageName,
                queryInfo:{
                    size:this.pageSize,
                    offset:this.pageSize * (this.currentPage - 1),
                }
            })
            open('新建成功~',"success")
        },
        async editPageDataAction(pageName,queryInfo,id){
            console.log(this.pageSize)
            await editPageData(`/${pageName}/${id}`,queryInfo)
            await this.getPageList({
                pageName:pageName,
                queryInfo:{
                    size:this.pageSize,
                    offset:this.pageSize * (this.currentPage - 1),
                }
            })
            open('编辑成功~',"success")
        },
    },
    persist:{
        storage:localStorage,
        paths:['']
    },
})