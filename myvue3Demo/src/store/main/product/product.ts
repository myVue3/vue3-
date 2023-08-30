import {defineStore} from "pinia";
import {getList} from "../../../service/main/system/system";


export const useProductStore = defineStore('product',{
    state:() => {
        return{
            goodsList:[],
            goodsCount:0
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
                case 'goods':
                    pageUrl = '/goods/list'
                    break
            }
            //解构出返回的list和totalCount
            const { list,totalCount } = await getList(pageUrl,searchInfo.queryInfo)
            switch (searchInfo.pageName) {
                case 'goods':
                    this.goodsList = list
                    this.goodsCount = totalCount
                    break
            }
            console.log(list,totalCount)
            return list.length

        },
    },
    persist:{
        storage:localStorage,
        paths:['']
    },
})