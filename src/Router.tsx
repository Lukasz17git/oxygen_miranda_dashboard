import { Route, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom'
import WebLayout from './AppLayouts/WebLayout.jsx'
import DashboardLayout from './AppLayouts/DashboardLayout.jsx'
import BookingsTable from './AppContainers/Table/BookingsTable.jsx'
import BookingForm from './AppContainers/BookingForm/BookingForm.js'
import AdminForm from './AppContainers/UserForm/AdminForm.jsx'
import EmployeeForm from './AppContainers/UserForm/EmployeeForm.jsx'
import LoginCard from './AppContainers/LoginCard/LoginCard.jsx'
import UsersTable from './AppContainers/Table/UsersTable.jsx'
import RoomsTable from './AppContainers/Table/RoomsTable.jsx'
import RoomForm from './AppContainers/RoomForm/RoomForm.jsx'
import { StoreType } from './Store/store.js'
import { getEmployeesThunk } from './Store/Slices/Users/employeesSlice.js'
import { authorizeAdminThunk } from './Store/Slices/Users/adminSlice.js'
import { getReviewsThunk } from './Store/Slices/Reviews/reviewsSlice.js'
import { getRoomsThunk } from './Store/Slices/Rooms/roomsSlice.js'
import CommentsSimplified from './AppContainers/Comment/CommentsSimplified.js'
import ReviewsTable from './AppContainers/Table/ReviewsTable.js'
import Calendar from './AppContainers/Calendar/Calendar.js'
import ReservationKpi from './AppContainers/Kpi/ReservationKpi.js'
import OccupiedKpi from './AppContainers/Kpi/OccupiedKpi.js'
import InsKpi from './AppContainers/Kpi/InsKpi.js'
import OutsKpi from './AppContainers/Kpi/OutsKpi.js'
import Comments from './AppContainers/Comment/Comments.js'
import Graph from './AppContainers/Graph/Graph.js'
import ReservationsResumee from './AppContainers/ReservationsResumee/ReservationsResumee.js'

const authenticationLoader = (store: StoreType) => async () => {

   const isAuthenticated = store.getState().admin._id
   if (!isAuthenticated) {
      await store.dispatch(authorizeAdminThunk())
      const isAuthenticated = store.getState().admin._id
      if (!isAuthenticated) return redirect('/login')
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
            {/* <Route path='register' element={<RegisterCard />} /> */}
         </Route>

         {/** PROTECTED ROUTES */}
         <Route path='/' element={<DashboardLayout />} loader={authenticationLoader(store)}>
            <Route index element={
               <div className="w-100% grid grid-cols-4 g-16.">
                  <ReservationKpi />
                  <OccupiedKpi />
                  <InsKpi />
                  <OutsKpi />
                  <Calendar />
                  <Graph />
                  <ReservationsResumee />
                  <Comments />
               </div>} loader={fetchData(store, getReviewsThunk)} />
            <Route path='bookings' loader={fetchData(store, getRoomsThunk)}>
               <Route index element={<BookingsTable />} />
               <Route path=':id' element={<BookingForm />} />
            </Route>
            <Route path='rooms' loader={fetchData(store, getRoomsThunk)} >
               <Route index element={<RoomsTable />} />
               <Route path=':id' element={<RoomForm />} />
            </Route>
            <Route path='reviews'
               loader={fetchData(store, getReviewsThunk)}
               element={
                  <div className="h-100% grid w-100% grid-cols-1 grid-rows-contact">
                     <CommentsSimplified />
                     <ReviewsTable />
                  </div>}
            />
            <Route path='users' loader={fetchData(store, getEmployeesThunk)}>
               <Route index element={<UsersTable />} />
               <Route path=':id' element={<EmployeeForm />} />
            </Route>
            <Route path='settings' element={<AdminForm />} />
         </Route>
      </Route>
   )
)

export default createRouter