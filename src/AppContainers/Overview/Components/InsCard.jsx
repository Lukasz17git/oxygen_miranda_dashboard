import ResumeeCard from "../Base/ResumeeCard"
import { BiLogIn } from 'react-icons/bi'


const InsCard = () => {
   const number = 13
   return (
      <ResumeeCard Icon={BiLogIn} number={number} text='Ins' iconClassName='-translate-x-1 scale-120' />
   )
}
export default InsCard