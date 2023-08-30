//本地存储工具类
class LocalCache {
    setCache = (key:string,value:any) => {
        window.localStorage.setItem(key,JSON.stringify(value))
    }

    getCache = (key:string) => {
        const value = window.localStorage.getItem(key)
        if(value){
            return JSON.parse(value)
        }
    }

    deleteCache = (key:string) => {
        window.localStorage.removeItem(key)
    }

    //清空本地所有缓存，谨慎使用
    clearCache = () => {
        window.localStorage.clear()
    }
}
export default new LocalCache()