import { Route, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom'
import Login from './AppPages/Login.jsx'
import DashboardLayout from './AppLayouts/DashboardLayout.jsx'
import Overviews from './AppPages/Overviews.jsx'
import BookingsTable from './AppContainers/Table/BookingsTable.jsx'
import Users from './AppPages/Users.jsx'
import Rooms from './AppPages/Rooms.jsx'
import Contacts from './AppPages/Contacts.jsx'
import BookingForm from './AppContainers/Form/BookingForm.jsx'
import RoomForm from './AppContainers/Form/RoomForm.jsx'
import UserForm from './AppContainers/Form/UserForm.jsx'
import AdminForm from './AppContainers/Form/AdminForm.jsx'

const Router = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         <Route path='login' element={<Login />} />
         <Route
            loader={() => !localStorage.getItem('isAuthenticated') ? null : redirect('/login')}
            path='/'
            element={<DashboardLayout />}
         >
            <Route index element={<Overviews />} />
            <Route path='bookings'>
               <Route index element={<BookingsTable />} />
               <Route path=':id' element={<BookingForm />} />
            </Route>
            <Route path='rooms' >
               <Route index element={<Rooms />} />
               <Route path=':id' element={<RoomForm />} />
            </Route>
            <Route path='contacts' element={<Contacts />} />
            <Route path='users' >
               <Route index element={<Users />} />
               <Route path=':id' element={<UserForm />} />
            </Route>
            <Route path='settings' element={<AdminForm />} />
         </Route>
      </Route>
   )
)

export default Router