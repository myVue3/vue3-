import ISearchForm from "../../../../../base-ui/HyForm/IhyForm";

export const roleSearchFormConfig:ISearchForm = {
    formItem: [
        {
            field:'id',
            type:'input',
            label:'id',
            placeholder:'请输入角色id'
        },
        {
            field:'name',
            type:'input',
            label:'角色名称',
            placeholder:'请输入角色名称'
        },
        {
            field:'intro',
            type:'input',
            label:'角色权限',
            placeholder:'请输入角色权限'
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