import { useState } from 'react'
import bookings from '../../JsonData/bookings'
import BookingRow from './Components/BookingRow'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'
import TableFooter from './Components/TableFooter'
import SearchInput from './Components/SearchInput'
import OrderBySelect from './Components/OrderBySelect'
import DndWrapper from '../../AppComponentsShared/DndWrapper'

const BookingsTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [selectedStatus, setSelectedStatus] = useState('')
   const [requestFilter, setRequestFilter] = useState('')
   const [orderBy, setOrderBy] = useState('orderDate')

   const bookingsToDisplayByStatus = selectedStatus ? bookings.filter(booking => booking.status === selectedStatus) : bookings
   const bookingsToDisplayByRequest = requestFilter ? bookingsToDisplayByStatus.filter(booking => booking.customer.name.toLowerCase().includes(requestFilter)) : bookingsToDisplayByStatus
   const bookingsToDisplayInCurrentPage = bookingsToDisplayByRequest.slice(page * ammountPerPage, (page + 1) * ammountPerPage)

   //Pagination
   const pages = Math.ceil(bookingsToDisplayByRequest.length / ammountPerPage)

   const isActive = (statusId) => statusId === selectedStatus
   const handleLabelButton = (statusId) => {
      setSelectedStatus(statusId)
      setPage(0)
   }

   //Select Options
   const options = {
      guest: 'Guest',
      orderDate: 'Order Date',
      checkIn: 'Check In',
      checkOut: 'Check Out',
   }


   return (
      <div className='h-100% fc'>
         <div className='frc'>
            <TableButton text='All Bookings' onClick={() => handleLabelButton('')} isActive={isActive('')} />
            <TableButton text='Check In' onClick={() => handleLabelButton('in')} isActive={isActive('in')} />
            <TableButton text='Check Out' onClick={() => handleLabelButton('out')} isActive={isActive('out')} />
            <TableButton text='In Progress' onClick={() => handleLabelButton('progress')} isActive={isActive('progress')} />
            <SearchInput label='Search Customer' value={requestFilter} setValue={setRequestFilter} />
            <OrderBySelect label='Order By' options={options} value={orderBy} setValue={setOrderBy} />
         </div>
         <div className='bg-fff br-12 fg1 my-16 dark:bg-dark-mode-black oh'>
            <TableLabels gridClassName='grid grid-cols-8 g-8 gcc pr-40'>
               <TableLabel className='col-span-2' text='Guest' />
               <TableLabel text='Order Date' />
               <TableLabel text='Check In' />
               <TableLabel text='Check Out' />
               <TableLabel text='Request' />
               <TableLabel text='Room Type' />
               <TableLabel text='Status' />
            </TableLabels>
            <div>
               <DndWrapper
                  key={bookingsToDisplayInCurrentPage}
                  data={bookingsToDisplayInCurrentPage}
                  Component={({ data }) => (
                     <BookingRow className='grid grid-cols-8 g-8 gcc pr-40' data={data} />
                  )}
               />
            </div>
         </div>
         <TableFooter
            page={page}
            pages={pages}
            setPage={setPage}
            ammountPerPage={ammountPerPage}
            currentDataLength={bookingsToDisplayInCurrentPage.length}
            filteredDataLength={bookingsToDisplayByRequest.length}
            maxDataLength={bookings.length}
         />
      </div >
   )
}
export default BookingsTable