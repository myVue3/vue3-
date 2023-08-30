import {reactive} from "vue";
import {FormRules} from "element-plus";

//手机号登陆校验规则
export const rules = reactive<FormRules>({
    phoneNumber:[
        {
            message:'请输入您的手机号',
            trigger: 'blur',
            required: true
        },
        {
            pattern:/^1[34578]\d{9}/,
            message:'请输入正确的手机号格式',
            trigger: 'blur',
            required: true
        },

    ],
    code: [
        {
            message:'请输入验证码',
            trigger: 'blur',
            required: true
        }
    ],
})