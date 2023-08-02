import { useNavigate } from "react-router-dom"
import { HiPlus } from "react-icons/hi"
import ActionIcon from "../../../AppComponents/ActionIcon"


const NewFormButton = () => {
   const navigate = useNavigate()
   return (
      <ActionIcon
         className="bg-green-dark tc-text-white-fff fs0 ml-16. h-38. w-38."
         onClick={() => navigate("new")}
      >
         <HiPlus />
      </ActionIcon>
   )
}
export default NewFormButton