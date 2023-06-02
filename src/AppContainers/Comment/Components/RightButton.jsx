import { BsFillArrowRightSquareFill } from "react-icons/bs"
import ActionIcon from "../../../AppComponents/ActionIcon"


const RightButton = ({ nextSlide, hideNext }) => {
   return (
      <ActionIcon onClick={nextSlide} className={`pos-a r-0 t-50% -translate-y-50%  ${hideNext ? 'none' : ''}`}>
         <BsFillArrowRightSquareFill className="h-100% w-100% fill-green-dark" />
      </ActionIcon>
   )
}
export default RightButton