import {ref} from "vue";

export function usePageModal(createCallBack?,editCallBack?){
    const pageModal = ref()
    const defaultFormData = ref({})
    const handleModelCreate = () => {
        defaultFormData.value = {}
        if (pageModal.value){
            pageModal.value.dialogVisible = true
        }
        if (createCallBack){
            createCallBack()
        }

    }
    const handleModelEdit = (row) => {
        defaultFormData.value = {...row}
        if (pageModal.value){
            pageModal.value.dialogVisible = true
        }
        if (editCallBack){
            editCallBack()
        }

    }
    return {
        pageModal,
        defaultFormData,
        handleModelCreate,
        handleModelEdit
    }
}