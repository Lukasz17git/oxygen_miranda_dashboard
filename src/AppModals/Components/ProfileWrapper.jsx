import Img from "../../AppComponents/Img"
import CloseModal from "./CloseModal"

const ProfileWrapper = ({ imageUrl, children, closeModal }) => {
   return (
      <div className="frc g-16px">
         <Img src={imageUrl || '/CriticalIcons/person.svg'} className="h-48px w-48px cover" />
         <div className="fcnb h-100% py-8px">
            {children}
         </div>
         <CloseModal closeModal={closeModal} />
      </div>
   )
}
export default ProfileWrapper