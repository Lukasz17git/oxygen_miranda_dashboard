import Kpi from "./__Kpi__"
import { FaBed } from 'react-icons/fa'


const ReservationKpi = () => {
   const number = 88
   return (
      <Kpi text='Reservations' Icon={FaBed} number={number} />
   )
}
export default ReservationKpi