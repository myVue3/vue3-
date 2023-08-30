import {reactive} from "vue";
import {FormRules} from "element-plus";

//账号密码登陆校验规则
export const rules = reactive<FormRules>({
    name: [{ message:'请输入您的账号', trigger: 'blur', required: true}],
    pass: [{ message:'请输入您的密码', trigger: 'blur', required: true}],
})
