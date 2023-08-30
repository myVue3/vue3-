import {defineStore} from "pinia";
import {getList} from "../../service/main/system/system";

export const useRootStore = defineStore('root',{
    state:() => {
        return {
            allDepartment:[],
            allRole:[]
        }
    },
    getters:{

    },
    actions:{
        async getAllDepartmentAndRole() {
            const { list: departmentList } = await getList('/department/list',{offset:0,size:20})
            const { list: roleList } = await getList('/role/list',{offset:0,size:20})
            this.allDepartment = departmentList
            this.allRole = roleList
        }
    },
    persist:{
        storage:localStorage,
        paths:['']
    },
})