import BottomButtons from "./Components/BottomButtons"
import ModalLayout from "./Components/ModalLayout"
import ProfileWrapper from "./Components/ProfileWrapper"
import StrongLabel from "./Components/StrongLabel"
import LightLabel from "./Components/LightLabel"
import ModalPharagraph from "./Components/ModalPharagraph"
import { useTypedSelector } from "../Store/store"
import { ReviewType } from "../Store/Slices/Reviews/reviews.types"

type CommentModalProps = { closeModal: () => unknown } & (WithData | WithIndex)
type WithData = { data: ReviewType, index?: undefined }
type WithIndex = { index: number, data?: undefined }

const CommentModal = ({ closeModal, index, data }: CommentModalProps) => {
   const review = useTypedSelector(state => index !== undefined ? state.reviews[index] : data)
   const fullname = `${review.person.name} ${review.person.lastname}`
   return (
      <ModalLayout>
         <ProfileWrapper closeModal={closeModal}>
            <StrongLabel text={fullname} />
            <LightLabel text={review.person.email} />
            <LightLabel text={review.person.phone} />
         </ProfileWrapper>
         <ModalPharagraph text={review.comment} />
         <BottomButtons />
      </ModalLayout>
   )
}

export default CommentModal