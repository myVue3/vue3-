import service from "./index";

export function login(data) {
    return service({
        method:'get',
        url:'/schools'
    })
}