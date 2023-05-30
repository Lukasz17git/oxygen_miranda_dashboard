import ResumeeCard from "../Base/ResumeeCard"
import { BiLogIn } from 'react-icons/bi'


const OutsCard = () => {
   const number = 77
   return (
      <ResumeeCard text='Outs' number={number} Icon={BiLogIn} iconClassName='-scale-x-120 translate-x-1 scale-120' />
   )
}
export default OutsCard