import Kpi from "./__Kpi__"
import { FaRegCalendarCheck } from 'react-icons/fa'


const OccupiedKpi = () => {
   const number = 32
   return (
      <Kpi text='Occupations' Icon={FaRegCalendarCheck} number={number} />
   )
}
export default OccupiedKpi