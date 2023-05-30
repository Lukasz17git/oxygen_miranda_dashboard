import ActionIcon from "../AppComponents/ActionIcon"
import { FaExpandAlt } from 'react-icons/fa'


const ReviewCard = ({ reviewIndex }) => {

   const openReviewModal = () => console.log('open review modal')
   return (
      <div>
         <p></p>
         <div>
            <div>

            </div>
            <ActionIcon >
               <FaExpandAlt />
            </ActionIcon>
         </div>
      </div>
   )
}
export default ReviewCard