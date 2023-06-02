import { useState } from "react"
import { calendarData } from "../../JsonData/calendarData"
import ReservationResumee from "./Components/ReservationResumee"


const ReservationsResumee = () => {

   const [max, setMax] = useState(false)
   const toDisplay = Math.min(calendarData.length, max ? 100 : 3)
   const arrayHolder = Array(toDisplay).fill()

   const seeMore = () => setMax(c => !c)

   return (
      <div className="col-span-4 bg-fff br-16 p-16 s-card g-16 fc dark:bg-dark-mode-black">
         {arrayHolder.map((_, index) => (
            <ReservationResumee key={index} index={index} />
         ))}
         <div className="frcc">
            <button onClick={seeMore} className="min-w-120 h-40 br-8 frcc px-16 tc-green-dark tf-app-semibold h:bg-app-bg-white dark:bg-green-dark/10 h:dark:bg-green-dark/20 dark:tc-dark-green ">
               {max ? 'View Less' : 'View More'}
            </button>
         </div>
      </div>
   )
}
export default ReservationsResumee