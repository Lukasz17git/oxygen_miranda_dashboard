
import { Outlet } from "react-router-dom"
import Sidebar from "../AppContainers/Sidebar/Sidebar"
import Navbar from "../AppContainers/Navbar/Navbar"


const DashboardLayout = () => {
   return (
      <div className="min-h-100vh w-100% fr bg-bg-white-fff">
         <Sidebar />
         <div className="w-100% fc bg-bg-white-contrast-f8f8f8">
            <Navbar />
            <div className="p-24px py-22px w-100% oya h-100%" >
               <Outlet />
            </div>
         </div>
      </div>
   )
}

export default DashboardLayout