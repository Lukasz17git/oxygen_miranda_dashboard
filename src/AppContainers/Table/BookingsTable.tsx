import { useState } from 'react'
import BookingRow from './Components/BookingRow'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'
import TableFooter from './Components/TableFooter'
import SearchInput from './Components/SearchInput'
import OrderBySelect from './Components/OrderBySelect'
import DndWrapper from '../../AppComponentsShared/DndWrapper'
import TableContentLayout from './Components/TableContentLayout'
import { useTypedSelector } from '../../Store/store'
import { shallowEqual } from 'react-redux'
import { BookingStatusType, BookingWithRoomInfoType } from '../../Store/Slices/Rooms/rooms.types'

const BookingsTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [selectedStatus, setSelectedStatus] = useState('')
   const [searchFilter, setSearchFilter] = useState('')
   const [orderBy, setOrderBy] = useState('orderDate')

   const numberOfBookings = useTypedSelector(state => state.rooms.reduce((acc, room) => room.bookings.length + acc, 0))
   const bookingsArrayToShow = useTypedSelector(state => {
      const rooms = state.rooms
      const allBookings: BookingWithRoomInfoType[] = []
      rooms.forEach(room => room.bookings.forEach(booking => allBookings.push({ ...booking, roomType: room.type, status: 'in' })))
      const byLabelFilter = selectedStatus ? allBookings.filter(booking => booking.status === selectedStatus) : allBookings
      const bySearchFilter = searchFilter ? byLabelFilter.filter(booking => `${booking.guest.name} ${booking.guest.lastname}`.toLowerCase().includes(searchFilter)) : byLabelFilter
      return bySearchFilter
   }, shallowEqual)

   const numberOfBookingsToShow = bookingsArrayToShow.length
   const dataToDisplayInCurrentPage = bookingsArrayToShow.slice(page * ammountPerPage, (page + 1) * ammountPerPage)
   const pages = Math.ceil(numberOfBookingsToShow / ammountPerPage)

   const isActive = (status: BookingStatusType | '') => status === selectedStatus
   const handleLabelButton = (status: BookingStatusType | '') => {
      setSelectedStatus(status)
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
            <SearchInput label='Search Customer' value={searchFilter} setValue={setSearchFilter} />
            <OrderBySelect label='Order By' options={options} value={orderBy} setValue={setOrderBy} />
         </div>
         <TableContentLayout>
            <TableLabels gridClassName='grid grid-cols-8 g-8px gcc pr-40px'>
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
                  key={Date.now()}
                  data={dataToDisplayInCurrentPage}
                  Component={({ data }: { data: BookingWithRoomInfoType }) => (
                     <BookingRow className='grid grid-cols-8 g-8px gcc pr-40px' data={data} />
                  )}
               />
            </div>
         </TableContentLayout>
         <TableFooter
            page={page}
            pages={pages}
            setPage={setPage}
            ammountPerPage={ammountPerPage}
            currentDataLength={dataToDisplayInCurrentPage.length}
            filteredDataLength={numberOfBookingsToShow}
            maxDataLength={numberOfBookings}
         />
      </div >
   )
}
export default BookingsTable