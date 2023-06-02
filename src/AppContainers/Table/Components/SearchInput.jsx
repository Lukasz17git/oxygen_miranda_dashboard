import { BsSearch } from "react-icons/bs"
import Input from "../../../AppComponents/Input"


const SearchInput = ({ label, value, setValue }) => {
   return (
      <Input
         value={value}
         onChange={(e) => setValue(e.target.value)}
         label={label}
         className='!bw-0 !pr-40 !bg-fff/70'
         wrapperClassName='ml-16'
      >
         <BsSearch className='pos-a r-8 t-50% -translate-y-50% fill-text-silver scale-80' />
      </Input>
   )
}
export default SearchInput