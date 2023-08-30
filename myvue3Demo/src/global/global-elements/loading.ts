import {ElLoading} from "element-plus";

let myLoading:object
type TLoading = (text?:string) => void

export const startLoading:TLoading = (text) => {
    myLoading = ElLoading.service({text:text})
    console.log('startLoading')
}
export const endLoading:TLoading = () => {
    myLoading.close()
    console.log('endLoading')
}
