import { tw } from "tailwind-multi-class"
import Img from "../../../AppComponents/Img"
import { calendarData } from "../../../JsonData/calendarData"
import calculateTimeAgo from "../../../Utils/calculateTimeAgo"

const reservationStatus = {
   in: tw('bg-green-dark', { dark: 'bg-green-dark/20 bc-green-dark bw-1' }),
   out: tw('bg-red-main', { dark: 'bg-red-main/20 bc-red-main bw-1' }),
   occupied: tw('bg-orange-main', { dark: 'bg-orange-main/20 bc-orange-main bw-1' }),
}

const ReservationResumee = ({ index }) => {
   const data = calendarData[index]
   const timeAgo = calculateTimeAgo(data.room.date)
   const days = data.room.days.join(', ')

   return (
      <div className="w-100% frc g-16px">
         <Img src={data.room.src} className="h-110px w-160px br-6px cover" />
         <div className="fcnb h-100% py-8px">
            <b className="tf-app-semibold ts-20px ">{data.room.name}</b>
            <div className="frc g-12px" >
               <Img src={data.client.photo || '/CriticalIcons/person.svg'} className="h-32px w-32px cover" />
               <b className="tf-app-semibold ts-14px">{data.client.name}</b>


               <q className="text-color-black">{timeAgo}</q>

            </div>
         </div>
         <div className={`px-12px min-h-40px min-w-40px frcc tc-white ml-a br-8px ${reservationStatus[data.room.status]}`}>
            {days}
         </div>
      </div>
   )
}
export default ReservationResumee