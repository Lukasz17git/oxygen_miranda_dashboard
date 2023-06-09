import ActionIcon from "../../../AppComponents/ActionIcon"
import { FiLogOut } from "react-icons/fi"
import { useNavigate } from "react-router-dom"


const Logout = () => {
   const navigate = useNavigate()
   const handleLogout = () => {
      localStorage.removeItem('isAuthenticated')
      navigate('/login')
   }

   return (
      <ActionIcon className="h:bg-app-bg-white br-8px" onClick={handleLogout} >
         <FiLogOut className="stroke-text-dark scale-110 rotate-180" />
      </ActionIcon>
   )
}
export default Logout