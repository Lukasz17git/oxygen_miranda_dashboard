import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './AppPages/Login'
import DashboardLayout from './AppLayouts/DashboardLayout'
import Overview from './AppPages/Overview'
import Bookings from './AppPages/Bookings'
import Users from './AppPages/Users'
import Rooms from './AppPages/Rooms'
import Contact from './AppPages/Contact'

const Router = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         <Route path='login' element={<Login />} />
         <Route path='/' element={<DashboardLayout />}>
            <Route path='overview' element={<Overview />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='users' element={<Users />} />
            <Route path='rooms' element={<Rooms />} />
            <Route path='contact' element={<Contact />} />
         </Route>
      </Route>
   )
)

export default Router