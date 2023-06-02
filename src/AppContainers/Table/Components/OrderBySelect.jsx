import Select from "../../../AppComponents/Select"


const OrderBySelect = ({ label, options, value, setValue }) => {
   return (
      <Select
         disableLabelAsOption={true}
         wrapperClassName='h-40 ml-a'
         className='!tc-green-dark'
         labelClassName='!tc-green-dark'
         label={label}
         optionsMap={options}
         value={value}
         onChange={(e) => setValue(e.target.value)} />
   )
}
export default OrderBySelect