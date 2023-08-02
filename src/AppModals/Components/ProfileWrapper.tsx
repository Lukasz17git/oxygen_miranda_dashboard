import { ReactNode } from "react"
import Img from "../../AppComponents/Img"
import CloseModal from "./CloseModal"

type TProfileWrapperProp = { imageUrl?: string, children?: ReactNode, closeModal: () => unknown }
const ProfileWrapper = ({ imageUrl, children, closeModal }: TProfileWrapperProp) => {
   return (
      <div className="frc g-16.">
         <Img src={imageUrl || '/CriticalIcons/person.svg'} className="h-48. w-48. cover" />
         <div className="fcnb h-100% py-8.">
            {children}
         </div>
         <CloseModal closeModal={closeModal} />
      </div>
   )
}
export default ProfileWrapper