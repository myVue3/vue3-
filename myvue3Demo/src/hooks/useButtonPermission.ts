import {useLoginStore} from "../store";
export function useButtonPermission(pageName,action){
    const loginStore = useLoginStore()
    const { buttonPermission } = loginStore
    const verifyButtonPermission = `system:${pageName}:${action}`
    return !!buttonPermission.find((item) => item === verifyButtonPermission)
}