import ISearchForm from "../../../../../base-ui/HyForm/IhyForm";

export const menuSearchFormConfig:ISearchForm = {
    formItem: [
        {
            field:'id',
            type:'input',
            label:'id',
            placeholder:''
        },
        {
            field:'departmentName',
            type:'input',
            label:'菜单名称',
            placeholder:''
        },
        {
            field:'hobby',
            type:'select',
            label:'菜单编号',
            placeholder:'',
            options:[{ label:'1',value:1 },{ label:'2',value:2 },{ label:'3',value:3 },{ label:'4',value:4 }]
        },
        {
            field:'createTime',
            type:'input',
            label:'创建日期',
            placeholder:''
        },
        {
            field:'searchTime',
            type:'datepicker',
            label:'日期搜索',
            placeholder:'',
            otherOptions:{
                startPlaceholder:'Start date',
                endPlaceholder:"End date",
                type:'daterange'
            }
        }
    ]
}