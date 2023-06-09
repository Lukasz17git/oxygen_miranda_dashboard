import { useState } from "react"
import Button from "../../../AppComponents/Button"
import Img from "../../../AppComponents/Img"
import NoteModal from "../../../AppModals/NoteModal"
import EditButton from "./EditButton"
import CellBigDate from "./CellBigDate"
import CellSmallDate from "./CellSmallDate"
import CellStatus from "./CellStatus"
import { tw } from "tailwind-multi-class"

const statusStyle = {
   in: tw('bg-[#EEF9F2] tc-[#5AD07A]', { dark: 'bw-1px bg-[rgba(19, 88, 70, 0.2)] bc-[#135846]' }),
   out: tw('bg-[#FFEDEC] tc-[#E23428]', { dark: 'bw-1px bg-[rgba(226, 52, 40, 0.2)] bc-[#E23428] bw-1 tc-[rgba(226, 52, 40, 0.9)]' }),
   progress: tw('bg-[#fdfde0] tc-[#90811f]', { dark: 'bw-1px bg-[rgba(241, 238, 58, 0.25)] bc-[rgba(255, 255, 33, 0.6)] tc-[rgba(255, 255, 33, 0.7)]' }),
}

const BookingRow = ({ data, className }) => {

   const { customer, orderDate, inDate, outDate, request, roomType, status } = data
   const { name, imageUrl, id } = customer

   const [showNoteModal, setShowNoteModal] = useState(false)

   return (
      <div className={`${className} min-h-72px h:s-table-row pos-r h:bg-bg-white-fff`}>
         <div className="frc g-16px col-span-2 mr-a ml-24px">
            <Img src={imageUrl || '/CriticalIcons/person.svg'} className="h-32px w-32px cover fs0" />
            <div className="fcnb h-100% py-8px">
               <b className="tf-app-semibold tc-text-black-262626">{name}</b>
               <q className="tf-app-light ts-14px tc-text-grey-6E6E6E">{'#' + id.slice(0, 8)}</q>
            </div>
         </div>
         <CellSmallDate date={orderDate} />
         <CellBigDate date={inDate} />
         <CellBigDate date={outDate} />
         <Button
            onClick={() => setShowNoteModal(true)}
            disabled={!request}
            text={request ? "View Note ↗" : "No Note"}
            className={`tw ${request ?
               'bg-button-green-pastel-EEF9F2 tf-app-semibold tc-text-dark-393939'
               : 'bg-transparent bc-border-green-pastel-EEF9F2 tc-text-green-dark-135846/50'}`}
         />
         <p>{roomType}</p>
         <CellStatus text={status} className={statusStyle[status]} />
         <EditButton id={id} />
         {showNoteModal && <NoteModal data={data} closeModal={() => setShowNoteModal(false)} />}
      </div>
   )
}
export default BookingRow