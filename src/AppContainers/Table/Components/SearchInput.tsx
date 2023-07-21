import { BsSearch } from "react-icons/bs"
import Input from "../../../AppComponents/Input"


const SearchInput = ({ label, value, setValue }: { label: string, value: string, setValue: (value: string) => any }) => {
   return (
      <Input
         value={value}
         onChange={(e) => setValue(e.target.value)}
         label={label}
         className='!bw-0 !pr-40px !bg-bg-white-fff/70'
         wrapperClassName='ml-16px'
      >
         <BsSearch className='pos-a r-8px t-50% -translate-y-50% fill-svg-silver-B2B2B2 scale-80' />
      </Input>
   )
}
export default SearchInput