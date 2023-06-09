import { useNavigate } from "react-router-dom"
import { HiPlus } from "react-icons/hi"
import ActionIcon from "../../../AppComponents/ActionIcon"


const NewFormButton = () => {
   const navigate = useNavigate()
   return (
      <ActionIcon
         className="bg-green-dark tc-text-white-fff fs0 ml-16px h-38px w-38px"
         onClick={() => navigate("new")}
      >
         <HiPlus />
      </ActionIcon>
   )
}
export default NewFormButton