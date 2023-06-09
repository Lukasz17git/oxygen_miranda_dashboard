import Emails from "./Components/Emails"
import Logout from "./Components/Logout"
import NavbarLabel from "./Components/NavbarLabel"
import Notifications from "./Components/Notifications"
import ThemeMode from "./Components/ThemeMode"
import ToggleSidebar from "./Components/ToggleSidebar"


const Navbar = () => {
   return (
      <div className="bg-bg-white-fff frcc h-64px px-16px g-24px fs0">
         <ToggleSidebar />
         <NavbarLabel />
         <div className="ml-a" />
         <Emails />
         <Notifications />
         <ThemeMode />
         <Logout />
      </div>
   )
}

export default Navbar