import ISearchForm from "../../../../../base-ui/HyForm/IhyForm";
export const departmentSearchFormConfig:ISearchForm = {
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
            label:'部门名称',
            placeholder:''
        },
        {
            field:'position',
            type:'select',
            label:'部门职位',
            placeholder:'',
            options:[
                { label:'董事长',value:0 },
                { label:'经理',value:1 },
                { label:'员工',value:2 }
            ]
        },
        {
            field:'peopleCount',
            type:'input',
            label:'部门人数',
            placeholder:''
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