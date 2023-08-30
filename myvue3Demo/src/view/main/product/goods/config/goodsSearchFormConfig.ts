import ISearchForm from "../../../../../base-ui/HyForm/IhyForm";

export const goodsSearchFormConfig:ISearchForm = {
    formItem: [
        {
            field:'id',
            type:'input',
            label:'id',
            placeholder:'请输入商品id'
        },
        {
            field:'name',
            type:'input',
            label:'商品名称',
            placeholder:'请输入商品名称'
        },
        {
            field:'newPrice',
            type:'input',
            label:'商品价格',
            placeholder:'请输入商品价格'
        },
        {
            field:'status',
            type:'select',
            label:'商品状态',
            placeholder:'请选择商品状态',
            options:[{label:'在售',value:0},{label:'已下架',value:1}]
        },
        {
            field:'createAt',
            type:'datepicker',
            label:'创建时间',
            placeholder:'请选择创建时间',
            otherOptions:{
                startPlaceholder:'开始时间',
                endPlaceholder:"结束时间",
                type:'daterange'
            }
        }
    ]
}