import ModalPharagraph from "./Components/ModalPharagraph"
import ModalLayout from "./Components/ModalLayout"
import StrongLabel from "./Components/StrongLabel"
import ProfileWrapper from "./Components/ProfileWrapper"
import LightLabel from "./Components/LightLabel"


const NoteModal = ({ data, closeModal }) => {

   //TODO en este el layout y el pharagraph variaban, tengo que cambiarlo

   const { customer, request } = data
   const { name, imageUrl, id } = customer
   return (
      <ModalLayout>
         <ProfileWrapper closeModal={closeModal} imageUrl={imageUrl}>
            <StrongLabel text={name} />
            <LightLabel text={id} />
         </ProfileWrapper>
         <ModalPharagraph text={request} />
      </ModalLayout>
   )
}
export default NoteModal