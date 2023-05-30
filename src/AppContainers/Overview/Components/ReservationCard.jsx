import ResumeeCard from "../Base/ResumeeCard"
import { FaBed } from 'react-icons/fa'


const ReservationCard = () => {
   const number = 88
   return (
      <ResumeeCard text='Reservations' Icon={FaBed} number={number} />
   )
}
export default ReservationCard