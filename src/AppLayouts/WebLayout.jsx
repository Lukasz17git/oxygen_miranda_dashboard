import { Outlet } from "react-router-dom"


const WebLayout = () => {
   return (
      <div className="min-h-100vh w-100% frcc bg-fff bg-hero-pattern-2">
         <Outlet />
      </div>
   )
}
export default WebLayout