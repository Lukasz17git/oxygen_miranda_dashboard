import { Route, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom'
import WebLayout from './AppLayouts/WebLayout.jsx'
import DashboardLayout from './AppLayouts/DashboardLayout.jsx'
import Overviews from './AppPages/Overview.jsx'
import BookingsTable from './AppContainers/Table/BookingsTable.jsx'
import BookingForm from './AppContainers/BookingForm/BookingForm.js'
import AdminForm from './AppContainers/UserForm/AdminForm.jsx'
import EmployeeForm from './AppContainers/UserForm/EmployeeForm.jsx'
import LoginCard from './AppContainers/LoginCard/LoginCard.jsx'
import UsersTable from './AppContainers/Table/UsersTable.jsx'
import RoomsTable from './AppContainers/Table/RoomsTable.jsx'
import RoomForm from './AppContainers/RoomForm/RoomForm.jsx'
import Contacts from './AppPages/Contacts.jsx'
import wait from './Utils/wait.js'
import { getAdminDataThunk } from './Store/Slices/Users/adminSlice.js'
import { StoreType } from './Store/store.js'

const authenticationLoader = (store: StoreType) => async () => {

   const isAuthenticated = store.getState().ui.isAuthenticated

   await wait(500)

   if (!isAuthenticated) {
      alert(`User session expired, redirecting to login page`)
      return redirect('/login')
   }

   return null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchData = (store: StoreType, thunk: (...p: any[]) => any) => async () => {
   await store.dispatch(thunk())
   return null
}

const createRouter = (store: StoreType) => createBrowserRouter(
   createRoutesFromElements(
      <Route>

         {/** PUBLIC ROUTES */}
         <Route path='/' element={<WebLayout />} >
            <Route path='login' element={<LoginCard />} />
         </Route>

         {/** PROTECTED ROUTES */}
         <Route path='/' element={<DashboardLayout />} loader={authenticationLoader(store)}>
            <Route index element={<Overviews />} />
            <Route path='bookings'>
               <Route index element={<BookingsTable />} />
               <Route path='new' element={<BookingForm />} />
               <Route path=':id' element={<BookingForm />} />
            </Route>
            <Route path='rooms' >
               <Route index element={<RoomsTable />} />
               <Route path='new' element={<RoomForm />} />
               <Route path=':id' element={<RoomForm />} />
            </Route>
            <Route path='contacts' element={<Contacts />} />
            {/* <Route path='users' loader={fetchData(store, getEmployeesDataThunk)}> */}
            <Route path='users'>
               <Route index element={<UsersTable />} />
               <Route path='new' element={<EmployeeForm />} />
               <Route path=':id' element={<EmployeeForm />} />
            </Route>
            <Route path='settings' element={<AdminForm />} loader={fetchData(store, getAdminDataThunk)} />
         </Route>
      </Route>
   )
)

export default createRouter