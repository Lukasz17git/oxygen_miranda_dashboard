import Select from "../../../AppComponents/Select"

type TOrderBySelect = {
   label: string,
   options: Record<string, string | number>,
   value: string | number | undefined,
   setValue: (value: string) => any
}
const OrderBySelect = ({ label, options, value, setValue }: TOrderBySelect) => {
   return (
      <Select
         disableLabelAsOption={true}
         wrapperClassName='h-40. ml-a'
         className='!tc-text-green-dark-135846'
         labelClassName='!tc-text-green-dark-135846 none'
         label={label}
         optionsMap={options}
         value={value}
         onChange={(e) => setValue(e.target.value)} />
   )
}
export default OrderBySelect