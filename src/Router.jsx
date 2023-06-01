import { Route, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom'
import WebLayout from './AppLayouts/WebLayout.jsx'
import DashboardLayout from './AppLayouts/DashboardLayout.jsx'
import Overviews from './AppPages/Overview.jsx'
import BookingsTable from './AppContainers/Table/BookingsTable.jsx'
import BookingForm from './AppContainers/BookingForm/BookingForm.jsx'
import UserForm from './AppContainers/UserForm/UserForm.jsx'
import LoginCard from './AppContainers/LoginCard/LoginCard.jsx'
import UsersTable from './AppContainers/Table/UsersTable.jsx'
import RoomsTable from './AppContainers/Table/RoomsTable.jsx'
import RoomForm from './AppContainers/RoomForm/RoomForm.jsx'
import Contacts from './AppPages/Contacts.jsx'

const authenticationLoader = () => localStorage.getItem('isAuthenticated') ? null : redirect('/login')
// const authenticationLoader = () => localStorage.getItem('isAuthenticated') > Date.now() ? null : redirect('/login')

const Router = createBrowserRouter(
   createRoutesFromElements(
      <Route>

         {/** PUBLIC ROUTES */}
         <Route path='/' element={<WebLayout />} >
            <Route path='login' element={<LoginCard />} />
         </Route>

         {/** PROTECTED ROUTES */}
         <Route path='/' element={<DashboardLayout />} loader={authenticationLoader}>
            <Route index element={<Overviews />} />
            <Route path='bookings'>
               <Route index element={<BookingsTable />} />
               <Route path='new' element={<BookingForm />} />
               <Route path=':id' element={<BookingForm />} />
            </Route>
            <Route path='rooms' >
               <Route index element={<RoomsTable />} />
               <Route path=':id' element={<RoomForm />} />
            </Route>
            <Route path='contacts' element={<Contacts />} />
            <Route path='users' >
               <Route index element={<UsersTable />} />
               <Route path=':id' element={<UserForm />} />
            </Route>
            <Route path='settings' element={<UserForm />} />
         </Route>
      </Route>
   )
)

export default Router