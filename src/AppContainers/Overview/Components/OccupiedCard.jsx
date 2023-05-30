import ResumeeCard from "../Base/ResumeeCard"
import { FaRegCalendarCheck } from 'react-icons/fa'


const OccupiedCard = () => {
   const number = 32
   return (
      <ResumeeCard text='Reservations' Icon={FaRegCalendarCheck} number={number} />
   )
}
export default OccupiedCard