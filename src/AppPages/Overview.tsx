import Comments from "../AppContainers/Comment/Comments"
import ReservationsResumee from "../AppContainers/ReservationsResumee/ReservationsResumee"
import Graph from "../AppContainers/Graph/Graph"
import Calendar from "../AppContainers/Calendar/Calendar"
import ReservationKpi from "../AppContainers/Kpi/ReservationKpi"
import OccupiedKpi from "../AppContainers/Kpi/OccupiedKpi"
import InsKpi from "../AppContainers/Kpi/InsKpi"
import OutsKpi from "../AppContainers/Kpi/OutsKpi"


const Overview = () => {
   return (
      <div className="w-100% grid grid-cols-4 g-16px">
         <ReservationKpi />
         <OccupiedKpi />
         <InsKpi />
         <OutsKpi />
         <Calendar />
         <Graph />
         <ReservationsResumee />
         <Comments />
      </div>
   )
}

export default Overview