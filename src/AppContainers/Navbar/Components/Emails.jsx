
import ActionIcon from "../../../AppComponents/ActionIcon"
import Badge from "../../../AppComponents/Badge"
import { MdOutlineMailOutline } from 'react-icons/md'


const Emails = () => {
   const emailsNumber = 2
   const openEmails = () => console.log('openEmails')

   return (
      <ActionIcon onClick={openEmails} className="pos-r h:bg-app-bg-white br-8">
         <MdOutlineMailOutline className="fill-text-dark" />
         <Badge text={emailsNumber} />
      </ActionIcon>
   )
}

export default Emails


