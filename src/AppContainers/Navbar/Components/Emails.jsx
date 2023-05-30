
import ActionIcon from "../../../AppComponents/ActionIcon"
import Badge from "../../../AppComponents/Badge"
import { MdOutlineMailOutline } from 'react-icons/md'


const Emails = () => {
   const emailsNumber = 2
   const openEmails = () => console.log('openEmails')

   return (
      <div className="pos-r h:bg-app-bg-white br-8">
         <ActionIcon onClick={openEmails}>
            <MdOutlineMailOutline className="fill-text-dark" />
            <Badge text={emailsNumber} />
         </ActionIcon>
      </div>
   )
}

export default Emails


