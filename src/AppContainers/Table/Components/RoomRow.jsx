import Img from "../../../AppComponents/Img"
import CellAmenities from "./CellAmenities"
import CellDiscount from "./CellDiscount"
import CellPrice from "./CellPrice"
import EditButton from "./EditButton"

const statusStyle = {
   available: 'bg-green-pastel tc-green-light',
   occupied: 'bg-red-pastel tc-red-main',
}

const BookingRow = ({ data, className }) => {

   const { id, photos, type, number, discount, price, amenities } = data

   const status = Math.random() >= 0.5 ? 'available' : 'occupied'
   const room = Math.floor(Math.random() * 8) + 1

   return (
      <div className={`${className} min-h-100 h:s-table-row pos-r h:bg-fff`}>
         <div className="frc g-16 col-span-3 mr-a ml-16">
            <Img src={photos[0] || `/Images/hotel-${room}.jpg`} className="h-96 w-150 br-6 cover" />
            <div className="py-8">
               <b className="tf-app-semibold tc-text-black ts-18">{`Room ${number}`}</b>
               <q className="tf-app-light ts-14 tc-text-grey">{'#' + id}</q>
            </div>
         </div>
         <b className="tf-app-semibold">{type}</b>
         <div className="amenities col-span-2">
            <CellAmenities amenities={amenities} />
         </div>
         <CellPrice price={price} />
         <CellDiscount price={price} discount={discount} />
         <div className={`tw-base-button min-w-100 w-100 br-10 tcap h-36 ${statusStyle[status]}`}>
            {status}
         </div>
         <EditButton id={id} />
      </div>
   )
}
export default BookingRow