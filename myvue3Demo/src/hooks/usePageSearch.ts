import {ref} from "vue";
import {useSystemStore} from "../store";
export function usePageSearch() {
    const contentRef = ref()
    const handleResetClick = () => {
        contentRef.value.getListData()
    }
    const handleQueryClick = (queryInfo) => {
        contentRef.value.getListData(queryInfo)
    }
    return {
        contentRef,
        handleResetClick,
        handleQueryClick
    }
}
