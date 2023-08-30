export const userContentConfig = {
    propList: [
        {prop:'name',label:'用户名',minWidth:'100px'},
        {prop:'realname',label:'真实姓名',minWidth:'100px'},
        {prop:'cellphone',label:'手机号码',minWidth:'100px'},
        {prop:'enable',label:'状态',minWidth:'100px',slotName:'enable'},
        {prop:'createAt',label:'创建时间',minWidth:'200px',slotName:'createAt'},
        {prop:'updateAt',label:'更新时间',minWidth:'200px',slotName:'updateAt'},
        {label: '操作',minWidth: '120px',slotName:'handler'}
    ],
    title: '用户列表',
    showIndexColum: true,
    showSelectColum: true,
    pageName:'users'
}