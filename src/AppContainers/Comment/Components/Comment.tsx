import ActionIcon from "../../../AppComponents/ActionIcon"
import Img from "../../../AppComponents/Img"
import { FaExpandAlt } from 'react-icons/fa'
import calculateTimeAgo from "../../../Utils/calculateTimeAgo"
import { RiDeleteBin4Fill } from "react-icons/ri"
import { TiTick } from "react-icons/ti"
import { tw } from "tailwind-multi-class"
import { useTypedDispatch, useTypedSelector } from "../../../Store/store"
import { deleteReviewThunk, updateReviewThunk } from "../../../Store/Slices/Reviews/reviewsSlice"

type TCommentProp = { index: number, openCommentModal: (...p: unknown[]) => unknown, className?: string }
const Comment = ({ index, openCommentModal, className }: TCommentProp) => {

   console.log('index', index)
   const { sentAt, person, comment, viewed, _id } = useTypedSelector(state => state.reviews[index])
   const timeAgo = calculateTimeAgo(new Date(sentAt).getTime())
   const fullname = `${person.name} ${person.lastname}`

   const dispatch = useTypedDispatch()
   const deleteReview = () => dispatch(deleteReviewThunk(_id))
   const markReviewAsViewed = () => dispatch(updateReviewThunk({ _id, viewed: true }))

   return (
      <div className={tw(
         `${className} keen-slider__slide`,
         "p-16. px-20. bc-color-separator bw-1. fc g-8. w-360. fs0 br-12. h:s-comment",
         { dark: "bc-dark-hover" }
      )}>
         <p className="min-h-48. max-h-120. text-ellipsis tc-text-grey-darker tf-app-regular ts-15.">{comment}</p>
         <div className="frc g-12.">
            <Img src={'/CriticalIcons/person.svg'} className="h-32. w-32. cover" />
            <div className="fcnb h-100% py-8.">
               <b className="tf-app-semibold tc-text-black">{fullname}</b>
               <q className="tf-app-light ts-14. tc-text-grey">{timeAgo}</q>
            </div>
            <div className="frc ml-a mt-a mb-4.">
               {viewed || (
                  <>
                     <ActionIcon className="tc-red-main h-36. w-36." onClick={deleteReview}>
                        <RiDeleteBin4Fill className="scale-80 fs0 pb-2." />
                     </ActionIcon>
                     <ActionIcon className="tc-green-dark h-36. w-36." onClick={markReviewAsViewed}>
                        <TiTick className="fs0 pb-2. scale-120" />
                     </ActionIcon>
                  </>
               )}
               <ActionIcon onClick={openCommentModal} className="h-36. w-36.">
                  <FaExpandAlt className="scale-70 fill-text-dark dark:fill-text-grey" />
               </ActionIcon>
            </div>
         </div>
      </div>
   )
}
export default Comment