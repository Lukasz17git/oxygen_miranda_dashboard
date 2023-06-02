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
      <ActionIcon className="h:bg-app-bg-white dark:h:bg-dark-hover br-8" onClick={handleLogout} >
         <FiLogOut className="stroke-text-dark dark:stroke-dark-green scale-110 rotate-180" />
      </ActionIcon>
   )
}
export default Logout