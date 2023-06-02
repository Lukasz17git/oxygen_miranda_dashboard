import { HiDotsVertical } from "react-icons/hi"
import ActionIcon from "../../../AppComponents/ActionIcon"
import { useNavigate } from "react-router-dom"


const EditButton = ({ id }) => {
   const navigate = useNavigate()
   return (
      <ActionIcon
         className="pos-a r-8 h:bg-app-bg-white h-32 w-32 br-8 dark:h:bg-text-dark"
         onClick={() => navigate(id)}
      >
         <HiDotsVertical className="scale-80 fill-text-grey" />
      </ActionIcon>
   )
}
export default EditButton