export const roleContentConfig = {
    propList: [
        {prop:'name',label:'角色名',minWidth:'100px'},
        {prop:'intro',label:'控制权限',minWidth:'100px'},
        {prop:'menuList',label:'可控内容',minWidth:'300px',slotName:'menuList'},
        {prop:'createAt',label:'创建时间',minWidth:'200px',slotName:'createAt'},
        {prop:'updateAt',label:'更新时间',minWidth:'200px',slotName:'updateAt'},
        {label: '操作',minWidth: '140px',slotName:'handler'}
    ],
    title: '角色列表',
    showIndexColum: true,
    showSelectColum: true,
    pageName:'role'
}