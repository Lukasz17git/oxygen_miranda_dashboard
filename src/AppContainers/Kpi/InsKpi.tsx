import Kpi from "./__Kpi__"
import { BiLogIn } from 'react-icons/bi'


const InsKpi = () => {
   const number = 13
   return (
      <Kpi Icon={BiLogIn} number={number} text='Ins' iconClassName='-translate-x-1 scale-120' />
   )
}
export default InsKpi