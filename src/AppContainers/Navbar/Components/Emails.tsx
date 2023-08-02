
import { useNavigate } from "react-router-dom"
import ActionIcon from "../../../AppComponents/ActionIcon"
import Badge from "../../../AppComponents/Badge"
import { MdOutlineMailOutline } from 'react-icons/md'
import { useTypedSelector } from "../../../Store/store"


const Emails = () => {
   const emailsNumber = useTypedSelector(state => state.reviews.filter(review => !review.viewed).length)
   const navigate = useNavigate()
   const openEmails = () => navigate('/contacts')

   return (
      <ActionIcon onClick={openEmails} className="pos-r h:bg-app-bg-white br-8.">
         <MdOutlineMailOutline className="fill-text-dark" />
         {!!emailsNumber && <Badge text={emailsNumber} />}
      </ActionIcon>
   )
}

export default Emails


