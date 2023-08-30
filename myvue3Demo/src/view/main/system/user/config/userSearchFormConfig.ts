import ISearchForm from "../../../../../base-ui/HyForm/IhyForm";

export const userSearchFormConfig:ISearchForm = {
    colum: {
        xl:8,
        lg:8,
        md:12,
        sm:24,
        xs:24
    },
    labelWidth:'20%',
    formItem: [
        {
            field:'id',
            type:'input',
            label:'id',
            placeholder:'请输入id'
        },
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
            field:'createAt',
            type:'datepicker',
            label:'日期搜索',
            placeholder:'创建时间',
            otherOptions:{
                startPlaceholder:'开始时间',
                endPlaceholder:"结束时间",
                type:'daterange'
            }
        }
    ],
}