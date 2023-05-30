import Img from "../../../AppComponents/Img"
import { calendarData } from "../../../JsonData/calendarData"
import calculateTimeAgo from "../../../Utils/calculateTimeAgo"

// bg-orange
const ReservationResumee = ({ index }) => {
   const data = calendarData[index]
   const timeAgo = calculateTimeAgo(data.room.date)
   const days = data.room.days.join(', ')
   return (
      <div className="w-100% frc g-16">
         <Img src={data.room.src} className="h-110 w-160 br-6 cover" />
         <div className="fcnb h-100% py-8">
            <b className="tf-app-semibold tc-text-dark ts-20">{data.room.name}</b>
            <div className="frc g-12" >
               <Img src={data.client.photo || '/CriticalIcons/person.svg'} className="h-32 w-32 cover" />
               <b className="tf-app-semibold ts-14">{data.client.name}</b>
               <q className="pl-4 tf-app-light ts-14 tc-text-dark">{timeAgo}</q>
            </div>
         </div>
         <div className={`px-12 min-h-40 min-w-40 frcc tc-white ml-a br-8 status-${[data.room.status]}`}>
            {days}
         </div>
      </div>
   )
}
export default ReservationResumee