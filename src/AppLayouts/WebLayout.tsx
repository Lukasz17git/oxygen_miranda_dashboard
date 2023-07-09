import { Outlet } from "react-router-dom"
import { tw } from "tailwind-multi-class"


const WebLayout = () => {
   return (
      <div className={tw("min-h-100vh w-100% frcc bg-bg-white-fff bg-hero-pattern-2")}>
         < Outlet />
      </div >
   )
}
export default WebLayout