import Select from "../../../AppComponents/Select"


const OrderBySelect = ({ label, options, value, setValue }) => {
   return (
      <Select
         disableLabelAsOption={true}
         wrapperClassName='h-40px ml-a'
         className='!tc-text-green-dark-135846'
         labelClassName='!tc-text-green-dark-135846 none'
         label={label}
         optionsMap={options}
         value={value}
         onChange={(e) => setValue(e.target.value)} />
   )
}
export default OrderBySelect