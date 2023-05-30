import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './AppPages/Login.jsx'
import DashboardLayout from './AppLayouts/DashboardLayout.jsx'
import Overviews from './AppPages/Overviews.jsx'
import Bookings from './AppPages/Bookings.jsx'
import Users from './AppPages/Users.jsx'
import Rooms from './AppPages/Rooms.jsx'
import Contacts from './AppPages/Contacts.jsx'

const Router = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         <Route path='login' element={<Login />} />
         <Route path='/' element={<DashboardLayout />}>
            <Route index element={<Overviews />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='users' element={<Users />} />
            <Route path='rooms' element={<Rooms />} />
            <Route path='contacts' element={<Contacts />} />
         </Route>
      </Route>
   )
)

export default Router