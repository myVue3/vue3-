export const menuContentConfig = {
    propList: [
        {prop:'name',label:'菜单名称',minWidth:'100px'},
        {prop:'sort',label:'菜单权重',minWidth:'100px'},
        {prop:'type',label:'菜单类别',minWidth:'100px'},
        {prop:'icon',label:'菜单图标',minWidth:'100px'},
        {prop:'url',label:'菜单路径',minWidth:'100px'},
        {prop: 'permission',label:'按钮权限',minWidth:'100px'},
        {prop:'createAt',label:'创建时间',minWidth:'200px',slotName:'createAt'},
        {prop:'updateAt',label:'更新时间',minWidth:'200px',slotName:'updateAt'},
        {label: '操作',minWidth: '140px',slotName:'handler'}
    ],
    title: '菜单列表',
    showIndexColum: false,
    showSelectColum: false,
    pageName:'menu',
    childrenProp:{
        rowKey:"id",
        treeProps:{ children: 'children', hasChildren: 'hasChildren' }
    },
    showFooter:false
}