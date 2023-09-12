export const roleModelConfig = {
    pageName:'role',
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
            label:'角色名称',
            placeholder:'请输入角色名称'
        },
        {
            field:'intro',
            type:'input',
            label:'角色权限',
            placeholder:'请输入角色权限'
        }
    ]
}