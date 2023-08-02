import { tw } from "tailwind-multi-class"
import Img from "../../../AppComponents/Img"
import { calendarData } from "../../../JsonData/calendarData"
import calculateTimeAgo from "../../../Utils/calculateTimeAgo"
import { RoomStatus } from "../../../Store/Slices/Rooms/rooms.types"

const reservationStatus: Record<RoomStatus, string> = {
   in: tw('bg-green-dark', { dark: 'bg-green-dark/20 bc-green-dark bw-1' }),
   out: tw('bg-red-main', { dark: 'bg-red-main/20 bc-red-main bw-1' }),
   occupied: tw('bg-orange-main', { dark: 'bg-orange-main/20 bc-orange-main bw-1' }),
}
type Props = { index: number }

const ReservationResumee = ({ index }: Props) => {

   const data = calendarData[index]
   const timeAgo = calculateTimeAgo(data.room.date)
   const days = data.room.days.join(', ')

   return (
      <div className="w-100% frc g-16.">
         <Img src={data.room.src} className="h-110. w-160. br-6. cover" />
         <div className="fcnb h-100% py-8.">
            <b className="tf-app-semibold ts-20. ">{data.room.name}</b>
            <div className="frc g-12." >
               <Img src={data.client.photo || '/CriticalIcons/person.svg'} className="h-32. w-32. cover" />
               <b className="tf-app-semibold ts-14.">{data.client.name}</b>
               <q className="text-color-black">{timeAgo}</q>
            </div>
         </div>
         <div className={`px-12. min-h-40. min-w-40. frcc tc-white ml-a br-8. ${reservationStatus[data.room.status as RoomStatus]}`}>
            {days}
         </div>
      </div>
   )
}
export default ReservationResumee