// 导入DAYJS库
import {dayjs} from "element-plus";

// 格式化时间
export function formatUtcString(utcString:string){
    return dayjs(utcString).format('YYYY-MM-DD HH:mm:ss')
}