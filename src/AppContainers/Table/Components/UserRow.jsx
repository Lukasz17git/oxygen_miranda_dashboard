import { useState } from "react"
import Img from "../../../AppComponents/Img"
import CellBigDate from "./CellBigDate"
import ActionIcon from "../../../AppComponents/ActionIcon"
import CellBold from "./CellBold"
import SmallText from "./SmallText"
import CellText from "./CellText"
import DescriptionModal from "../../../AppModals/DescriptionModal"
import EditButton from "./EditButton"

const statusStyle = {
   active: 'tc-green-light',
   inactive: 'tc-red-main'
}

const UserRow = ({ data, className }) => {

   const { id, name, lastname, email, phone, description, status, imageUrl, date } = data
   const fullname = lastname ? `${name} ${lastname}` : name

   const [showNoteModal, setShowNoteModal] = useState(false)

   return (
      <div className={`${className} min-h-72 h:s-table-row pos-r h:bg-fff dark:h:bg-text-black`}>
         <div className="frc g-16 col-span-2 mr-a ml-24">
            <Img src={imageUrl || '/CriticalIcons/person.svg'} className="h-32 w-32 cover fs0" />
            <div className="fcnb h-100% py-8">
               <b className="tf-app-semibold tc-text-black">{fullname}</b>
               <SmallText text={'#' + id.slice(0, 8)} />
            </div>
         </div>
         <CellBigDate date={date} />
         <CellText text={email} className='col-span-2' />
         <CellText text={'+' + phone} className='col-span-2' />
         <div className='col-span-2'>
            <p className="i tc-text-dark ts-15">{description.length > 50 ? description.slice(0, 40) + '...' : description}</p>
            {description.length > 50 && (
               <ActionIcon className="i h-100%" onClick={() => setShowNoteModal(true)}>
                  <span>↗</span>
               </ActionIcon>
            )}
         </div>
         <CellBold text={status} className={`tcap ${statusStyle[status]}`} />
         <EditButton id={id} />
         {showNoteModal && <DescriptionModal name={fullname} text={description} id={id} imageUrl={imageUrl} closeModal={() => setShowNoteModal(false)} />}
      </div>
   )
}
export default UserRow