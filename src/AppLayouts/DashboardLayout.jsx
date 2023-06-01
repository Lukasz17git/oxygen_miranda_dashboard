import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../AppContainers/Sidebar/Sidebar"
import Navbar from "../AppContainers/Navbar/Navbar"


const DashboardLayout = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(true)
   return (
      <div className="min-h-100vh w-100% fr bg-fff">
         <Sidebar isOpen={isSidebarOpen} />
         <div className="w-100% bg-app-bg-white fc">
            <Navbar toggleSidebar={setIsSidebarOpen} />
            <div className="p-24 py-22 w-100% oya h-100%" >
               <Outlet />
            </div>
         </div>
      </div>
   )
}

export default DashboardLayout