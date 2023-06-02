import { IoClose } from "react-icons/io5"
import ActionIcon from "../AppComponents/ActionIcon"
import Img from "../AppComponents/Img"


const NoteModal = ({ data, closeModal }) => {

   const { customer, request } = data
   const { name, imageUrl, id } = customer
   return (
      <div className="pos-f z-1 transform-to-center bg-fff s-profile p-24 pb-28 bc-color-separator bw-1 fc g-16 w-400 br-12">
         <div className="frc g-16">
            <Img src={imageUrl || '/CriticalIcons/person.svg'} className="h-48 w-48 cover" />
            <div className="fcnb h-100% py-8">
               <b className="tf-app-semibold tc-text-black">{name}</b>
               <q className="tf-app-light ts-14 tc-text-grey">{id}</q>
            </div>
            <ActionIcon onClick={closeModal} className="ml-a h:bg-app-bg-white br-6">
               <IoClose className="scale-120 fill-text-dark" />
            </ActionIcon>
         </div>
         <p className="tc-text-grey-darker tf-app-regular px-6 ts-15">{request}</p>
      </div>
   )
}
export default NoteModal