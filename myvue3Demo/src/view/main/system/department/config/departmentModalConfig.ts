export const departmentModelConfig = {
    pageName:'department',
    title:'新增部门',
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
            label:'部门名称',
            placeholder:'请输入部门名称'
        },
        {
            field:'leader',
            type:'input',
            label:'部门主管',
            placeholder:'请输入部门主管'
        },
        {
            field:'parentId',
            type:'input',
            label:'部门编号',
            placeholder:'请输入部门编号'
        },
    ]
}