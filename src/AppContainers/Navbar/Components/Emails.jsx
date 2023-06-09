
import { useNavigate } from "react-router-dom"
import ActionIcon from "../../../AppComponents/ActionIcon"
import Badge from "../../../AppComponents/Badge"
import { MdOutlineMailOutline } from 'react-icons/md'


const Emails = () => {
   const emailsNumber = 2
   const navigate = useNavigate()
   const openEmails = () => navigate('/contacts')

   return (
      <ActionIcon onClick={openEmails} className="pos-r h:bg-app-bg-white br-8px">
         <MdOutlineMailOutline className="fill-text-dark" />
         <Badge text={emailsNumber} />
      </ActionIcon>
   )
}

export default Emails


