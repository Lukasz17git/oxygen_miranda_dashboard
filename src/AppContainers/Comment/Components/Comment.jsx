import ActionIcon from "../../../AppComponents/ActionIcon"
import Img from "../../../AppComponents/Img"
import comments from "../../../JsonData/comments"
import { FaExpandAlt } from 'react-icons/fa'
import calculateTimeAgo from "../../../Utils/calculateTimeAgo"
import { RiDeleteBin4Fill } from "react-icons/ri"
import { TiTick } from "react-icons/ti"


const Comment = ({ index, openCommentModal, className }) => {

   const comment = comments[index]
   const timeAgo = calculateTimeAgo(comment.date)

   return (
      <div className={`${className} p-16 px-20 bc-color-separator dark:bc-dark-hover bw-1 fc g-8 w-360 fs0 br-12 h:s-comment keen-slider__slide`}>
         <p className="max-h-120 text-ellipsis tc-text-grey-darker tf-app-regular ts-15 dark:tc-text-silver">{comment.comment}</p>
         <div className="frc g-12">
            <Img src={comment.client.photo || '/CriticalIcons/person.svg'} className="h-32 w-32 cover" />
            <div className="fcnb h-100% py-8">
               <b className="tf-app-semibold tc-text-black dark:tc-dark-white">{comment.client.name}</b>
               <q className="tf-app-light ts-14 tc-text-grey dark:tc-text-silver">{timeAgo}</q>
            </div>
            <div className="frc ml-a mt-a mb-4">
               {comment.viewed || (
                  <>
                     <ActionIcon className="tc-red-main h-36 w-36">
                        <RiDeleteBin4Fill className="scale-80 fs0 pb-2" />
                     </ActionIcon>
                     <ActionIcon className="tc-green-dark h-36 w-36">
                        <TiTick className="fs0 pb-2 scale-120" />
                     </ActionIcon>
                  </>
               )}
               <ActionIcon onClick={openCommentModal} className="h-36 w-36">
                  <FaExpandAlt className="scale-70 fill-text-dark dark:fill-text-grey" />
               </ActionIcon>
            </div>
         </div>
      </div>
   )
}
export default Comment