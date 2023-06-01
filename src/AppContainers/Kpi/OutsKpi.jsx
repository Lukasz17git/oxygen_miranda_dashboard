import Kpi from "./__Kpi__"
import { BiLogIn } from 'react-icons/bi'


const OutsKpi = () => {
   const number = 77
   return (
      <Kpi text='Outs' number={number} Icon={BiLogIn} iconClassName='-scale-x-120 translate-x-1 scale-120' />
   )
}
export default OutsKpi