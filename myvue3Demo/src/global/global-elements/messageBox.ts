import { ElMessageBox } from 'element-plus'

type TMessageOpen = (openMessage:string,
                     openType:'success' | 'info' | 'warning' | 'error',
                     openFinishFun:() => void) => void
export const messageBoxOpen:TMessageOpen = (openMessage,openType,openFinishFun) => {
    ElMessageBox.confirm(
        openMessage,
        '提示',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: openType,
        }
    )
        .then(() => {
            openFinishFun()
        })
        .catch(() => {

        })
}