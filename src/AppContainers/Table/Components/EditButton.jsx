import { HiDotsVertical } from "react-icons/hi"
import ActionIcon from "../../../AppComponents/ActionIcon"
import { useNavigate } from "react-router-dom"


const EditButton = ({ id }) => {
   const navigate = useNavigate()
   return (
      <ActionIcon
         className="pos-a r-8px h:bg-bg-white-contrast-f8f8f8 h-32px w-32px br-8px"
         onClick={() => navigate(id)}
      >
         <HiDotsVertical className="scale-80 fill-svg-grey-6E6E6E" />
      </ActionIcon>
   )
}
export default EditButton