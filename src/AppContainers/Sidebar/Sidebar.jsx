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
      <div className={`py-16px fcc g-32px duration-[400ms] oh ${isSidebar ? 'max-w-300px fs0' : 'max-w-0 hide'}`}>
         <Logo />
         <ul className="fc g-16px w-300px">
            <SidebarLink href="" text='Dashboard' Icon={HiViewGrid} />
            <SidebarLink href="bookings" text='Bookings' Icon={BsCalendarCheck} iconClassName='scale-90' />
            <SidebarLink href='rooms' text='Rooms' Icon={MdOutlineBedroomParent} iconClassName='scale-110' />
            <SidebarLink href='contacts' text='Contacts' Icon={BiMessageDetail} />
            <SidebarLink href='users' text='Users' Icon={FaUsers} />
         </ul>
         <Profile />
         <div className="w-240px">
            <strong className="block tf-app-semibold">Travi Hotel Admin Dashboard</strong>
            <span className="block w-max tf-app-light tc-text-green-799283 ts-14px">© 2020 All Rights Reserved</span>
         </div>
         <span className="w-240px tc-text-green-799283 tf-app-light ts-14px">Made with ♥ by Lukasz</span>
      </div>
   )
}
export default Sidebar