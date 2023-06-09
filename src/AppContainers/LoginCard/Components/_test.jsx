

const DashboardLayout = () => {
   return (
      <AuthProvider>
         <Navbar />
         <Sidebar />
         <div>
            <Outlet />
         </div>
      </AuthProvider>
   )
}
export default DashboardLayout

const App = () => {

   return (
      <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Overview />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="users" element={<Users />} />
            <Route path="contacts" element={<Contacts />} />
         </Route>
      </Routes>
   )
}


