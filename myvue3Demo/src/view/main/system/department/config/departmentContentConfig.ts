export const departmentContentConfig = {
    propList: [
        {prop:'name',label:'部门名称',minWidth:'100px'},
        {prop:'leader',label:'部门主管',minWidth:'100px'},
        {prop:'parentId',label:'部门编号',minWidth:'100px'},
        {prop:'createAt',label:'创建时间',minWidth:'200px',slotName:'createAt'},
        {prop:'updateAt',label:'更新时间',minWidth:'200px',slotName:'updateAt'},
        {label: '操作',minWidth: '120px',slotName:'handler'}
    ],
    title: '部门列表',
    showIndexColum: true,
    showSelectColum: true,
    pageName:'department'
}