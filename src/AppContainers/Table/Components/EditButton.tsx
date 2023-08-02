import { HiDotsVertical } from "react-icons/hi"
import ActionIcon from "../../../AppComponents/ActionIcon"
import { useNavigate } from "react-router-dom"


const EditButton = ({ _id }: { _id: string }) => {
   const navigate = useNavigate()
   return (
      <ActionIcon
         className="pos-a r-8. h:bg-bg-white-contrast-f8f8f8 h-32. w-32. br-8."
         onClick={() => navigate(_id)}
      >
         <HiDotsVertical className="scale-80 fill-svg-grey-6E6E6E" />
      </ActionIcon>
   )
}
export default EditButton