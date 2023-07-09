import { BsFillArrowRightSquareFill } from "react-icons/bs"
import ActionIcon from "../../../AppComponents/ActionIcon"


const LeftButton = ({ prevSlide, hidePrev }: { prevSlide: () => unknown, hidePrev: boolean }) => {
   return (
      <ActionIcon onClick={prevSlide} className={`pos-a l-0 t-50% -translate-y-50% ${hidePrev ? 'none' : ''}`}>
         <BsFillArrowRightSquareFill className="h-100% w-100% fill-green-dark -scale-x-100" />
      </ActionIcon>
   )
}
export default LeftButton