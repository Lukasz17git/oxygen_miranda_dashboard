import Emails from "./Components/Emails"
import Logout from "./Components/Logout"
import Notifications from "./Components/Notifications"
import ThemeMode from "./Components/ThemeMode"
import ToggleSidebar from "./Components/ToggleSidebar"


const Navbar = () => {
   return (
      <div className="bg-fff frcc h-64 px-16 g-24 fs0">
         <ToggleSidebar />
         <h1>Dashboard</h1>
         <div className="ml-a " />
         <Emails />
         <Notifications />
         <ThemeMode />
         <Logout />
      </div>
   )
}

export default Navbar