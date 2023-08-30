import {App} from "vue";
import {formatUtcString} from "../../utils/date-format";
export function registerProperties(app:App) {
    app.config.globalProperties.$filter = {
        formatTime(value:string){
            return formatUtcString(value)
        }
    }
}