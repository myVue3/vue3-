import {ElMessage} from "element-plus";

type TOpen = (message:string,type:'success' | 'warning' | 'info' | 'error') => void
export const open:TOpen = (message,type) => {
    ElMessage({
        message: message,
        grouping: true,
        type: type,
        duration:2000
    })
}