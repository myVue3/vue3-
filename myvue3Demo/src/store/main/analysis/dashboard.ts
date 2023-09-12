import {defineStore} from "pinia";
import {getAddressSale,getCategorySale,getCategoryCount,getCategoryFavor} from "../../../service/main/dashboard";


export const useDashboardStore = defineStore('dashboard',{
    state:() => {
        return {
            categoryCount:[],
            categorySale:[],
            addressSale:[],
            categoryFavor:[]

        }
    },
    getters:{

    },
    actions:{
        getGoodsAction:async function (){
            this.categoryCount = await getCategoryCount()
            this.categorySale = await getCategorySale()
            this.addressSale = await getAddressSale()
            this.categoryFavor = await getCategoryFavor()
        }
    },
    persist:{
        storage:localStorage,
        paths:['']
    },
})