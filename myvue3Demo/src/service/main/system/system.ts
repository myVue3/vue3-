import {service} from "../../index";
export function getList(url:string,queryInfo?:any) {
    return service.post(url,queryInfo)
}
export function deletePageData(url:string) {
    return service.delete(url)
}
export function createPageData(url:string,queryInfo?:any) {
    return service.post(url,queryInfo)
}
export function editPageData(url:string,queryInfo?:any) {
    return service.petch(url,queryInfo)
}