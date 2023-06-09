import { useState } from "react"
import Img from "../../../AppComponents/Img"
import CellBigDate from "./CellBigDate"
import ActionIcon from "../../../AppComponents/ActionIcon"
import Button from "../../../AppComponents/Button"
import CellBold from "./CellBold"
import SmallText from "./SmallText"
import CommentModal from "../../../AppModals/CommentModal"


const ContactRow = ({ data, className }) => {

   const { date, client, id, comment, email, phone, subject, archived } = data
   const { name, photo } = client

   const [showNoteModal, setShowNoteModal] = useState(false)

   return (
      <div className={`${className} min-h-72px h:s-table-row pos-r h:bg-bg-white-fff`}>
         <div className="frc g-16px col-span-2 mr-a ml-24px">
            <Img src={photo || '/CriticalIcons/person.svg'} className="h-32px w-32px fs0" />
            <div className="fcnb h-100% py-8px">
               <b className="tf-app-semibold tc-text-black-262626">{name}</b>
               {/* <SmallText text={'#' + id.slice(0, 8)} /> */}
               <SmallText text={email} />
               <SmallText text={'+' + phone} />
            </div>
         </div>
         <CellBigDate date={date} />
         <CellBold text={subject} />
         <div className="col-span-3">
            <p className="inline">{comment.length > 100 ? comment.slice(0, 97) + '...' : comment}</p>
            <ActionIcon className="iblock h-100%" onClick={() => setShowNoteModal(true)}>
               <span>↗</span>
            </ActionIcon>
         </div>
         {archived ? <div>-</div> : <Button text="Archive" />}
         {showNoteModal && <CommentModal comment={data} closeModal={() => setShowNoteModal(false)} />}
      </div>
   )
}
export default ContactRow