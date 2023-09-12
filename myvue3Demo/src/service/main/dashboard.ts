import {service} from "../index";
export function getCategoryCount() {
    return service.get('/goods/category/count')
}
export function getCategorySale() {
    return service.get('/goods/category/sale')
}
export function getAddressSale() {
    return service.get('/goods/address/sale')
}

export function getCategoryFavor() {
    return service.get('/goods/category/favor')
}
