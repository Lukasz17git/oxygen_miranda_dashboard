import { useState } from "react"
import Button from "../../../AppComponents/Button"
import Img from "../../../AppComponents/Img"
import NoteModal from "../../../AppModals/NoteModal"
import EditButton from "./EditButton"
import CellBigDate from "./CellBigDate"
import CellSmallDate from "./CellSmallDate"
import CellStatus from "./CellStatus"

const statusStyle = {
   in: 'bg-green-pastel tc-green-light',
   out: 'bg-red-pastel tc-red-main',
   progress: 'bg-yellow-pastel tc-yellow-main'
}

const BookingRow = ({ data, className }) => {

   const { customer, orderDate, inDate, outDate, request, roomType, status } = data
   const { name, imageUrl, id } = customer

   const [showNoteModal, setShowNoteModal] = useState(false)

   return (
      <div className={`${className} min-h-72 h:s-table-row pos-r h:bg-fff`}>
         <div className="frc g-16 col-span-2 mr-a ml-24">
            <Img src={imageUrl || '/CriticalIcons/person.svg'} className="h-32 w-32 cover" />
            <div className="fcnb h-100% py-8">
               <b className="tf-app-semibold tc-text-black">{name}</b>
               <q className="tf-app-light ts-14 tc-text-grey">{'#' + id}</q>
            </div>
         </div>
         <CellSmallDate date={orderDate} />
         <CellBigDate date={inDate} />
         <CellBigDate date={outDate} />
         <Button
            onClick={() => setShowNoteModal(true)}
            disabled={!request}
            text={request ? "View Note ↗" : "No Note"}
            className={`tw ${request ? 'bg-green-pastel tf-app-semibold tc-text-dark' : 'bg-transparent bc-green-pastel tc-green-dark/50'}`}
         />
         <p>{roomType}</p>
         <CellStatus text={status} className={statusStyle[status]} />
         <EditButton id={id} />
         {showNoteModal && <NoteModal data={data} closeModal={() => setShowNoteModal(false)} />}
      </div>
   )
}
export default BookingRow