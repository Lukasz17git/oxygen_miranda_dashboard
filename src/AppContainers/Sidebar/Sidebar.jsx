import Logo from "./Components/Logo"
import SidebarLink from "./Base/SidebarLink"
import Profile from "./Components/Profile"
import { MdOutlineBedroomParent } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import { HiViewGrid } from 'react-icons/hi'
import { useTypedSelector } from "../../Store/store"
import { BsCalendarCheck } from 'react-icons/bs'

const Sidebar = () => {
   const isSidebar = useTypedSelector(state => state.layout.sidebar)
   return (
      <div className={`py-16 fcc g-32 duration-[400ms] oh ${isSidebar ? 'max-w-300 fs0' : 'max-w-0 hidden'}`}>
         <Logo />
         <ul className="fc g-16 w-100%">
            <SidebarLink href="" text='Dashboard' Icon={HiViewGrid} />
            <SidebarLink href="bookings" text='Bookings' Icon={BsCalendarCheck} iconClassName='scale-90'/>
            <SidebarLink href='rooms' text='Rooms' Icon={MdOutlineBedroomParent} iconClassName='scale-110' />
            <SidebarLink href='contacts' text='Contacts' Icon={BiMessageDetail} />
            <SidebarLink href='users' text='Users' Icon={FaUsers} />
         </ul>
         <Profile />
         <div className="w-240">
            <strong className="block tf-app-semibold">Travi Hotel Admin Dashboard</strong>
            <span className="block w-max tf-app-light tc-green-text ts-14">© 2020 All Rights Reserved</span>
         </div>
         <span className="w-240 tc-green-text tf-app-light ts-14">Made with ♥ by Lukasz</span>
      </div>
   )
}
export default Sidebar