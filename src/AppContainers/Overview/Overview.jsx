import Calendar from "./Components/Calendar"
import Graph from "./Components/Graph"
import InsCard from "./Components/InsCard"
import OccupiedCard from "./Components/OccupiedCard"
import OutsCard from "./Components/OutsCard"
import ReservationCard from "./Components/ReservationCard"
import ReservationsResumee from "./Components/ReservationsResumee"


const Overview = () => {
   return (
      <div className="w-100% grid grid-cols-4 g-16">
         <ReservationCard />
         <OccupiedCard />
         <InsCard />
         <OutsCard />
         <Calendar />
         <Graph />
         <ReservationsResumee />
      </div>
   )
}
export default Overview