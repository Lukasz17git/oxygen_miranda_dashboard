import ActionIcon from "../../../AppComponents/ActionIcon"
import Button from "../../../AppComponents/Button"
import Img from "../../../AppComponents/Img"
import { getDayMonthYear, getFullDate, getTime } from "../../../Utils/formatDate"
import { HiDotsVertical } from 'react-icons/hi'
import { useNavigate } from "react-router-dom"

const statusStyle = {
   in: 'bg-green-pastel tc-green-light',
   out: 'bg-red-pastel tc-red-main',
   progress: 'bg-yellow-pastel tc-yellow-main'
}

const BookingRow = ({ data, className }) => {

   const { customer, orderDate, inDate, outDate, request, roomType, status } = data
   const { name, imageUrl, id } = customer

   const navigate = useNavigate()

   return (
      <div className={`${className} h-72 h:s-table-row pos-r h:bg-fff`}>
         <div className="frc g-16 col-span-2">
            <Img src={imageUrl || '/CriticalIcons/person.svg'} className="h-32 w-32 cover" />
            <div className="fcnb h-100% py-8">
               <b className="tf-app-semibold tc-text-black">{name}</b>
               <q className="tf-app-light ts-14 tc-text-grey">{'#' + id}</q>
            </div>
         </div>
         <div>
            <b className="tf-app-regular ts-15 tc-text-dark">{getFullDate(orderDate)}</b>
         </div>
         <div className="fc">
            <b className="tf-app-regular ts-15">{getDayMonthYear(inDate)}</b>
            <span className="tf-app-light ts-14 tc-text-grey-darker">{getTime(inDate)}</span>
         </div>
         <div className="fc">
            <b className="tf-app-regular ts-15">{getDayMonthYear(outDate)}</b>
            <span className="tf-app-light ts-14 tc-text-grey-darker">{getTime(outDate)}</span>
         </div>
         <Button
            disabled={!request}
            text="View Notes"
            className={`tw ${request ?
               'bg-green-pastel tf-app-semibold tc-text-dark h:after:content-["↗"] after:pl-4 after:w-4 after:tc-text-grey'
               : 'bg-transparent bc-green-pastel tc-green-dark/50'}`}
         />
         <p>{roomType}</p>
         <div className={`tw-base-button min-w-100 w-100 br-10 tcap h-36 ${statusStyle[status]}`}>
            {status}
         </div>
         <ActionIcon
            className="pos-a r-8 h:bg-app-bg-white h-32 w-32 br-8"
            onClick={() => navigate(id)}
         >
            <HiDotsVertical className="scale-80 fill-text-grey" />
         </ActionIcon>
      </div>
   )
}
export default BookingRow