import { IoClose } from "react-icons/io5"
import ActionIcon from "../../AppComponents/ActionIcon"


const CloseModal = ({ closeModal }) => {
   return (
      <ActionIcon onClick={closeModal} className="ml-a h:bg-icon-white-F8F8F8 br-6px">
         <IoClose className="scale-120 fill-svg-dark-393939" />
      </ActionIcon>
   )
}
export default CloseModal