export const goodsContentConfig = {
    propList: [
        {prop:'name',label:'商品名称',minWidth:'100px'},
        {prop:'oldPrice',label:'原价格',minWidth:'100px',slotName:'oldPrice'},
        {prop:'newPrice',label:'现价格',minWidth:'100px',slotName:'newPrice'},
        {prop:'status',label:'状态',minWidth:'100px'},
        {prop: 'imgUrl',label:'商品图片',minWidth:'150px',slotName:'image'},
        {prop:'createAt',label:'创建时间',minWidth:'200px',slotName:'createAt'},
        {prop:'updateAt',label:'更新时间',minWidth:'200px',slotName:'updateAt'},
        {label: '操作',minWidth: '140px',slotName:'handler'}
    ],
    title: '商品列表',
    showIndexColum: true,
    showSelectColum: true,
    pageName:'goods'
}