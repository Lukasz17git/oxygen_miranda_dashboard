import ActionIcon from "../AppComponents/ActionIcon"
import Img from "../AppComponents/Img"
import comments from "../JsonData/comments"
import { FaExpandAlt } from 'react-icons/fa'
import calculateTimeAgo from "../Utils/calculateTimeAgo"


const Comment = ({ path, index }) => {

   const comment = comments[index]
   const timeAgo = calculateTimeAgo(comment.date)
   const openReviewModal = () => console.log('open review modal')

   return (
      <div className="p-16 px-20 bc-color-separator bw-1 fc g-16 w-320 fs0 br-12 h:s-comment keen-slider__slide">
         <p className="max-h-120 text-ellipsis tc-text-grey-darker tf-app-regular">{comment.comment}</p>
         <div className="frc g-16">
            <Img src={comment.client.photo || '/CriticalIcons/person.svg'} className="h-32 w-32 cover" />
            <div className="fcnb h-100% py-8">
               <b className="tf-app-semibold tc-text-black">{comment.client.name}</b>
               <q className="tf-app-light ts-14 tc-text-grey">{timeAgo}</q>
            </div>
            <ActionIcon onClick={openReviewModal} className="ml-a mt-a h:bg-app-bg-white br-6">
               <FaExpandAlt className="scale-80 fill-text-dark" />
            </ActionIcon>
         </div>
      </div>
   )
}
export default Comment