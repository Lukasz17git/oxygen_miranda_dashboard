
import { useNavigate } from "react-router-dom"
import ActionIcon from "../../../AppComponents/ActionIcon"
import Badge from "../../../AppComponents/Badge"
import { MdOutlineMailOutline } from 'react-icons/md'


const Emails = () => {
   const emailsNumber = 2
   const navigate = useNavigate()
   const openEmails = () => navigate('/contacts')

   return (
      <ActionIcon onClick={openEmails} className="pos-r h:bg-app-bg-white br-8 dark:h:bg-dark-hover">
         <MdOutlineMailOutline className="fill-text-dark dark:fill-dark-green" />
         <Badge text={emailsNumber} />
      </ActionIcon>
   )
}

export default Emails


