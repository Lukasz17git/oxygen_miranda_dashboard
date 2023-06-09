import { useState } from "react"
import { calendarData } from "../../JsonData/calendarData"
import ReservationResumee from "./Components/ReservationResumee"
import { tw } from "tailwind-multi-class"


const ReservationsResumee = () => {

   const [max, setMax] = useState(false)
   const toDisplay = Math.min(calendarData.length, max ? 100 : 3)
   const arrayHolder = Array(toDisplay).fill()

   const seeMore = () => setMax(c => !c)

   return (
      <div className="col-span-4 bg-fff br-16px p-16px s-card g-16px fc">
         {arrayHolder.map((_, index) => (
            <ReservationResumee key={index} index={index} />
         ))}
         <div className="frcc">
            <button onClick={seeMore} className={tw(
               "min-w-120px h-40px br-8px frcc px-16px tc-green-dark tf-app-semibold h:bg-app-bg-white"
            )}>
               {max ? 'View Less' : 'View More'}
            </button>
         </div>
      </div>
   )
}
export default ReservationsResumee