import { useNavigate } from "react-router-dom"
import ActionIcon from "../../../AppComponents/ActionIcon"
import Badge from "../../../AppComponents/Badge"
import { BiBell } from 'react-icons/bi'


const Notifications = () => {
   const notificationsNumber = 24
   const navigate = useNavigate()
   const openNotifications = () => navigate('/bookings')

   return (
      <ActionIcon
         onClick={openNotifications}
         className="br-8 h:bg-app-bg-white dark:h:bg-dark-hover"
      >
         <BiBell className="fill-text-dark dark:fill-dark-green" />
         <Badge text={notificationsNumber} />
      </ActionIcon>
   )
}
export default Notifications