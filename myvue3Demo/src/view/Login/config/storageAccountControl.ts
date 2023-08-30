import cache from "../../../utils/cache";

export const storageAccount = (name,pass) => {
    cache.setCache('name',name)
    cache.setCache('pass',pass)
}
export const deleteStorageAccount = () => {
    cache.deleteCache('name')
    cache.deleteCache('pass')
}