import { useState } from "react"
import Img from "../../../AppComponents/Img"
import CellBigDate from "./CellBigDate"
import ActionIcon from "../../../AppComponents/ActionIcon"
import Button from "../../../AppComponents/Button"
import CellBold from "./CellBold"
import SmallText from "./SmallText"
import CommentModal from "../../../AppModals/CommentModal"
import { ReviewType } from "../../../Store/Slices/Reviews/reviews.types"
import { updateReviewThunk } from "../../../Store/Slices/Reviews/reviewsSlice"
import { useTypedDispatch } from "../../../Store/store"


const ReviewsRow = ({ data, className }: { data: ReviewType, className: string }) => {

   const { _id, comment, subject, archived, sentAt, person } = data
   const { name, lastname, email, phone } = person
   const fullName = `${name} ${lastname}`

   const [showNoteModal, setShowNoteModal] = useState(false)

   const dispatch = useTypedDispatch()
   const archiveReview = () => dispatch(updateReviewThunk({ _id, archived: !archived }))

   return (
      <div className={`${className} min-h-72. h:s-table-row pos-r h:bg-bg-white-fff`}>
         <div className="frc g-16. col-span-2 mr-a ml-24.">
            <Img src={'/CriticalIcons/person.svg'} className="h-32. w-32. fs0" />
            <div className="fcnb h-100% py-8.">
               <b className="tf-app-semibold tc-text-black-262626">{fullName}</b>
               {/* <SmallText text={'#' + _id.slice(0, 8)} /> */}
               <SmallText text={email} />
               <SmallText text={phone ? '+' + phone : ''} />
            </div>
         </div>
         <CellBigDate date={sentAt} />
         <CellBold text={subject} />
         <div className="col-span-3">
            <p className="inline">{comment.length > 100 ? comment.slice(0, 97) + '...' : comment}</p>
            <ActionIcon className="iblock h-100%" onClick={() => setShowNoteModal(true)}>
               <span>↗</span>
            </ActionIcon>
         </div>
         {archived ? <div>-</div> : <Button text="Archive" onClick={archiveReview} />}
         {showNoteModal && <CommentModal data={data} closeModal={() => setShowNoteModal(false)} />}
      </div>
   )
}
export default ReviewsRow