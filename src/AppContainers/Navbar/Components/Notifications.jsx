import ActionIcon from "../../../AppComponents/ActionIcon"
import Badge from "../../../AppComponents/Badge"
import { BiBell } from 'react-icons/bi'


const Notifications = () => {
   const notificationsNumber = 24
   const openNotifications = () => console.log('openNotifications')
   return (
      <ActionIcon
         onClick={openNotifications}
         className="br-8 h:bg-app-bg-white"
      >
         <BiBell className="fill-text-dark" />
         <Badge text={notificationsNumber} />
      </ActionIcon>
   )
}
export default Notifications