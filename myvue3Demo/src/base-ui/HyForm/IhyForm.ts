type formType = 'input'|'select'|'password'|'datepicker'
interface IhyForm {
    field:string;
    type: formType;
    label: string;
    placeholder?: string;
    rules?: [];
    options?: object[][
        {
            label: string,
            value: string | number
        }
        ];
    otherOptions?: {}
}
export default interface ISearchForm {
    formItem:IhyForm[],
    labelWidth?:string,
    colum?:any,
    itemStyle?:any,
    title?:string
}