import { useState } from "react"
import Button from "../../../AppComponents/Button"
import Img from "../../../AppComponents/Img"
import NoteModal from "../../../AppModals/NoteModal"
import EditButton from "./EditButton"
import CellBigDate from "./CellBigDate"
import CellSmallDate from "./CellSmallDate"
import CellStatus from "./CellStatus"
import { tw } from "tailwind-multi-class"
import { BookingType, BookingWithRoomInfoType, RoomType } from "../../../Store/Slices/Rooms/rooms.types"

const statusStyle = {
   in: tw('bg-[#EEF9F2] tc-[#5AD07A]', { dark: 'bw-1. bg-[rgba(19, 88, 70, 0.2)] bc-[#135846]' }),
   out: tw('bg-[#FFEDEC] tc-[#E23428]', { dark: 'bw-1. bg-[rgba(226, 52, 40, 0.2)] bc-[#E23428] bw-1 tc-[rgba(226, 52, 40, 0.9)]' }),
   progress: tw('bg-[#fdfde0] tc-[#90811f]', { dark: 'bw-1. bg-[rgba(241, 238, 58, 0.25)] bc-[rgba(255, 255, 33, 0.6)] tc-[rgba(255, 255, 33, 0.7)]' }),
}
type TBookingRow = {
   data: BookingWithRoomInfoType,
   className: string
}
const BookingRow = ({ data, className }: TBookingRow) => {

   const { _id, guest, orderDate, inDate, outDate, specialRequest, roomType } = data
   const { name, lastname, profileUrl } = guest
   const fullname = `${name} ${lastname}`

   const [showNoteModal, setShowNoteModal] = useState(false)

   const status = Math.random() > 0.3333 ? 'in' : Math.random() > 0.5 ? 'out' : 'progress'

   return (
      <div className={`${className} min-h-72. h:s-table-row pos-r h:bg-bg-white-fff`}>
         <div className="frc g-16. col-span-2 mr-a ml-24.">
            <Img src={profileUrl || '/CriticalIcons/person.svg'} className="h-32. w-32. cover fs0" />
            <div className="fcnb h-100% py-8.">
               <b className="tf-app-semibold tc-text-black-262626">{fullname}</b>
               <q className="tf-app-light ts-14. tc-text-grey-6E6E6E">{'#' + _id.slice(0, 8)}</q>
            </div>
         </div>
         <CellSmallDate date={orderDate} />
         <CellBigDate date={inDate} />
         <CellBigDate date={outDate} />
         <Button
            onClick={() => setShowNoteModal(true)}
            disabled={!specialRequest}
            text={specialRequest ? "View Note ↗" : "No Note"}
            className={`tw ${specialRequest ?
               'bg-button-green-pastel-EEF9F2 tf-app-semibold tc-text-dark-393939'
               : 'bg-transparent bc-border-green-pastel-EEF9F2 tc-text-green-dark-135846/50'}`}
         />
         <p>{roomType}</p>
         <CellStatus text={status} className={statusStyle[status]} />
         <EditButton _id={_id} />
         {showNoteModal && <NoteModal data={data} closeModal={() => setShowNoteModal(false)} />}
      </div>
   )
}
export default BookingRow