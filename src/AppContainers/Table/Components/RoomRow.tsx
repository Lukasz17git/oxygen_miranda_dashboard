import Img from "../../../AppComponents/Img"
import { RoomType } from "../../../Store/Slices/Rooms/rooms.types"
import CellAmenities from "./CellAmenities"
import CellBold from "./CellBold"
import CellDiscount from "./CellDiscount"
import CellPrice from "./CellPrice"
import EditButton from "./EditButton"

const statusStyle = {
   available: 'bg-green-pastel tc-green-light',
   occupied: 'bg-red-pastel tc-red-main',
}

const BookingRow = ({ data, className }: { data: RoomType, className: string }) => {

   const { _id, images, type, number, discount, price, amenities } = data
   const status: keyof typeof statusStyle = Math.random() > 0.5 ? 'available' : 'occupied'

   return (
      <div className={`${className} min-h-100px pos-r h:bg-bg-white-fff h:s-table-row`}>
         <div className="frc g-16px col-span-3 mr-a ml-16px">
            <Img src={images[0] || `/Images/hotel-${5}.jpg`} className="h-96px w-150px br-6px cover fs0" />
            <div className="py-8px">
               <b className="tf-app-semibold tc-text-black-262626 ts-18px">{`Room ${number}`}</b>
               <q className="tf-app-light ts-14px tc-text-grey-6E6E6E">{'#' + _id.slice(0, 8)}</q>
            </div>
         </div>
         <CellBold text={type} />
         <CellAmenities amenities={amenities} />
         <CellPrice price={price} />
         <CellDiscount price={price} discount={discount} />
         <div className={`tw-base-button min-w-100px w-100px br-10px tcap h-36px ${statusStyle[status]}`}>
            {status}
         </div>
         <EditButton _id={_id} />
      </div>
   )
}
export default BookingRow