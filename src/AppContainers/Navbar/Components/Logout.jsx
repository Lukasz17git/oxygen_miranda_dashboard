import ActionIcon from "../../../AppComponents/ActionIcon"
import { FiLogOut } from "react-icons/fi"
import { useTypedDispatch } from "../../../Store/store"


const Logout = () => {
   const handleLogout = () => console.log('redirect to login page')
   const dispatch = useTypedDispatch()
   return (
      <ActionIcon className="h:bg-app-bg-white br-8" >
         <FiLogOut className="stroke-text-dark scale-110 rotate-180" />
      </ActionIcon>
   )
}
export default Logout