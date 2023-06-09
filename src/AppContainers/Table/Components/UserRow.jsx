import { useState } from "react"
import Img from "../../../AppComponents/Img"
import CellBigDate from "./CellBigDate"
import ActionIcon from "../../../AppComponents/ActionIcon"
import CellBold from "./CellBold"
import SmallText from "./SmallText"
import CellText from "./CellText"
import DescriptionModal from "../../../AppModals/DescriptionModal"
import EditButton from "./EditButton"

const stateStyle = {
   active: 'tc-text-green-light-5AD07A',
   inactive: 'tc-text-red-E23428'
}

const UserRow = ({ data, className }) => {

   const { id, name, lastname, email, phone, description, state, profileUrl, dischargeDate } = data
   const fullname = lastname ? `${name} ${lastname}` : name

   const [showNoteModal, setShowNoteModal] = useState(false)

   return (
      <div className={`${className} pos-r min-h-72px h:s-table-row h:bg-bg-white-fff`}>
         <div className="frc g-16px col-span-2 mr-a ml-24px">
            <Img src={profileUrl || '/CriticalIcons/person.svg'} className="h-32px w-32px cover fs0" />
            <div className="fcnb h-100% py-8px">
               <b className="tf-app-semibold tc-text-black-262626">{fullname}</b>
               <SmallText text={'#' + id.slice(0, 8)} />
            </div>
         </div>
         <CellBigDate date={dischargeDate} />
         <CellText text={email} className='col-span-2' />
         <CellText text={'+' + phone} className='col-span-2' />
         <div className='col-span-2'>
            <p className="inline tc-text-dark-393939 ts-15px">{description.length > 50 ? description.slice(0, 40) + '...' : description}</p>
            {description.length > 50 && (
               <ActionIcon className="inline h-100%" onClick={() => setShowNoteModal(true)}>
                  <span>↗</span>
               </ActionIcon>
            )}
         </div>
         <CellBold text={state} className={`tcap ${stateStyle[state]}`} />
         <EditButton id={id} />
         {showNoteModal && (
            <DescriptionModal
               name={fullname}
               text={description}
               id={id}
               imageUrl={profileUrl}
               closeModal={() => setShowNoteModal(false)}
            />
         )}
      </div>
   )
}
export default UserRow