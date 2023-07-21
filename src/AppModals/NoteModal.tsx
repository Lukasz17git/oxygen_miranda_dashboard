import ModalPharagraph from "./Components/ModalPharagraph"
import ModalLayout from "./Components/ModalLayout"
import StrongLabel from "./Components/StrongLabel"
import ProfileWrapper from "./Components/ProfileWrapper"
import LightLabel from "./Components/LightLabel"
import { BookingType } from "../Store/Slices/Rooms/rooms.types"

type NoteModalProps = {
   data: BookingType,
   closeModal: () => unknown
}
const NoteModal = ({ data, closeModal }: NoteModalProps) => {

   //TODO en este el layout y el pharagraph variaban, tengo que cambiarlo

   const { guest, specialRequest, _id } = data
   const { name, profileUrl } = guest
   return (
      <ModalLayout>
         <ProfileWrapper closeModal={closeModal} imageUrl={profileUrl}>
            <StrongLabel text={name} />
            <LightLabel text={_id} />
         </ProfileWrapper>
         <ModalPharagraph text={specialRequest} />
      </ModalLayout>
   )
}
export default NoteModal