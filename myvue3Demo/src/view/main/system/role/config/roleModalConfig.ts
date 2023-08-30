export const roleModelConfig = {
    pageName:'users',
    title:'新增角色',
    itemStyle:{
        padding:'5px auto'
    },
    colum: {
        xl:24
    },
    labelWidth:'20%',
    formItem: [
        {
            field:'name',
            type:'input',
            label:'姓名',
            placeholder:'请输入姓名'
        },
        {
            field:'realname',
            type:'input',
            label:'真实姓名',
            placeholder:'请输入真实姓名'
        },
        {
            field:'cellphone',
            type:'input',
            label:'电话号码',
            placeholder:'请输入电话号码'
        },
        {
            field:'enable',
            type:'select',
            label:'用户状态',
            placeholder:'请选择用户状态',
            options:[{ label:'启用',value:1 },{ label:'禁用',value:0 }]
        },
        {
            field:'roleId',
            type:'select',
            label:'用户权限',
            placeholder:'请选择用户权限',
            options:[]
        },
        {
            field:'departmentId',
            type:'select',
            label:'所处部门',
            placeholder:'请选择用户部门',
            options:[]
        },
    ]
}