import ActionIcon from "../../../AppComponents/ActionIcon"
import Img from "../../../AppComponents/Img"
import comments from "../../../JsonData/comments"
import { FaExpandAlt } from 'react-icons/fa'
import calculateTimeAgo from "../../../Utils/calculateTimeAgo"
import { RiDeleteBin4Fill } from "react-icons/ri"
import { TiTick } from "react-icons/ti"
import { tw } from "tailwind-multi-class"

type TCommentProp = { index: number, openCommentModal: (...p: unknown[]) => unknown, className?: string }
const Comment = ({ index, openCommentModal, className }: TCommentProp) => {

   const comment = comments[index]
   const timeAgo = calculateTimeAgo(comment.date)

   return (
      <div className={tw(
         `${className} keen-slider__slide`,
         "p-16px px-20px bc-color-separator bw-1px fc g-8px w-360px fs0 br-12px h:s-comment",
         { dark: "bc-dark-hover" }
      )}>
         <p className="max-h-120px text-ellipsis tc-text-grey-darker tf-app-regular ts-15px">{comment.comment}</p>
         <div className="frc g-12px">
            <Img src={comment.client.photo || '/CriticalIcons/person.svg'} className="h-32px w-32px cover" />
            <div className="fcnb h-100% py-8px">
               <b className="tf-app-semibold tc-text-black">{comment.client.name}</b>
               <q className="tf-app-light ts-14px tc-text-grey">{timeAgo}</q>
            </div>
            <div className="frc ml-a mt-a mb-4px">
               {comment.viewed || (
                  <>
                     <ActionIcon className="tc-red-main h-36px w-36px">
                        <RiDeleteBin4Fill className="scale-80 fs0 pb-2px" />
                     </ActionIcon>
                     <ActionIcon className="tc-green-dark h-36px w-36px">
                        <TiTick className="fs0 pb-2px scale-120" />
                     </ActionIcon>
                  </>
               )}
               <ActionIcon onClick={openCommentModal} className="h-36px w-36px">
                  <FaExpandAlt className="scale-70 fill-text-dark dark:fill-text-grey" />
               </ActionIcon>
            </div>
         </div>
      </div>
   )
}
export default Comment