import { useContext } from "react"
import { tw } from "tailwind-multi-class"
import { LoginContext } from "./LoginForm"
import Button from '../../../AppComponents/Button'
import SvgLoadingState from '../../../Svgs/SvgLoadingState'


const Submit = () => {
   const { isPending } = useContext(LoginContext)
   return (
      <Button e2e-id="login-submit" className={tw(
         'w-100%',
         { hover: 'bg-green-dark tc-fff' },
         { dark: 'bg-dark-green tc-app-bg-white h:bc-green-light/60' }
      )}>
         {isPending ? <SvgLoadingState className="scale-180" /> : <>Login</>}
      </Button>
   )
}
export default Submit