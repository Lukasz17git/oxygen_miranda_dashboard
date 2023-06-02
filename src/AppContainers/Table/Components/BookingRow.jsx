import { useState } from "react"
import Button from "../../../AppComponents/Button"
import Img from "../../../AppComponents/Img"
import NoteModal from "../../../AppModals/NoteModal"
import EditButton from "./EditButton"
import CellBigDate from "./CellBigDate"
import CellSmallDate from "./CellSmallDate"
import CellStatus from "./CellStatus"

const statusStyle = {
   in: 'bg-green-pastel tc-green-light dark:bg-green-dark/20 dark:bc-green-dark dark:bw-1 ',
   out: 'bg-red-pastel tc-red-main dark:bg-red-main/20 dark:bc-red-main dark:bw-1 dark:tc-red-main/90',
   progress: 'bg-yellow-pastel tc-yellow-main // dark:bg-dark-yellow-pastel/25 dark:bc-dark-yellow/60 dark:bw-1 dark:tc-dark-yellow/70 ',
}

const BookingRow = ({ data, className }) => {

   const { customer, orderDate, inDate, outDate, request, roomType, status } = data
   const { name, imageUrl, id } = customer

   const [showNoteModal, setShowNoteModal] = useState(false)

   return (
      <div className={`${className} min-h-72 h:s-table-row pos-r h:bg-fff dark:h:bg-text-black`}>
         <div className="frc g-16 col-span-2 mr-a ml-24">
            <Img src={imageUrl || '/CriticalIcons/person.svg'} className="h-32 w-32 cover fs0" />
            <div className="fcnb h-100% py-8">
               <b className="tf-app-semibold tc-text-black dark:tc-dark-white">{name}</b>
               <q className="tf-app-light ts-14 tc-text-grey dark:tc-dark-silver">{'#' + id.slice(0, 8)}</q>
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
               'bg-green-pastel tf-app-semibold tc-text-dark dark:tc-dark-green/90 dark:bg-green-dark/5 dark:bc-green-dark'
               : 'bg-transparent bc-green-pastel tc-green-dark/50 dark:bc-dark-hover dark:tc-text-dark'}`}
         />
         <p className="dark:tc-dark-white">{roomType}</p>
         <CellStatus text={status} className={statusStyle[status]} />
         <EditButton id={id} />
         {showNoteModal && <NoteModal data={data} closeModal={() => setShowNoteModal(false)} />}
      </div>
   )
}
export default BookingRow