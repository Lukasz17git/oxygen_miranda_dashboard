
import { Outlet } from "react-router-dom"
import Sidebar from "../AppContainers/Sidebar/Sidebar"
import Navbar from "../AppContainers/Navbar/Navbar"


const DashboardLayout = () => {
   return (
      <div className="min-h-100vh w-100% fr bg-fff dark:bg-dark-mode-black">
         <Sidebar />
         <div className="w-100% bg-app-bg-white fc dark:bg-dark-mode-bg">
            <Navbar />
            <div className="p-24 py-22 w-100% oya h-100%" >
               <Outlet />
            </div>
         </div>
      </div>
   )
}

export default DashboardLayout