import ModalLayout from "./Components/ModalLayout"
import ProfileWrapper from "./Components/ProfileWrapper"
import StrongLabel from "./Components/StrongLabel"
import LightLabel from "./Components/LightLabel"
import ModalPharagraph from "./Components/ModalPharagraph"


const DescriptionModal = ({ name, text, id, imageUrl, closeModal }) => {

   return (
      <ModalLayout>
         <ProfileWrapper closeModal={closeModal} imageUrl={imageUrl}>
            <StrongLabel text={name} />
            <LightLabel text={id} />
         </ProfileWrapper>
         <ModalPharagraph text={text} />
      </ModalLayout>
   )
}

export default DescriptionModal