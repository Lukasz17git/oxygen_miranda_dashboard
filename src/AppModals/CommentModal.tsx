import comments from "../JsonData/comments"
import BottomButtons from "./Components/BottomButtons"
import ModalLayout from "./Components/ModalLayout"
import ProfileWrapper from "./Components/ProfileWrapper"
import StrongLabel from "./Components/StrongLabel"
import LightLabel from "./Components/LightLabel"
import ModalPharagraph from "./Components/ModalPharagraph"

type CommentModalProps = { index: number, closeModal: () => unknown }
const CommentModal = ({ index, closeModal }: CommentModalProps) => {
   const comment = comments[index]

   return (
      <ModalLayout>
         <ProfileWrapper closeModal={closeModal} imageUrl={comment.client.photo}>
            <StrongLabel text={comment.client.name} />
            <LightLabel text={comment.email} />
            <LightLabel text={comment.phone} />
         </ProfileWrapper>
         <ModalPharagraph text={comment.comment} />
         <BottomButtons />
      </ModalLayout>
   )
}

export default CommentModal