import { useState } from 'react'
import bookings from '../../JsonData/bookings'
import Navigation from '../../AppComponents/Navigation'
import Select from '../../AppComponents/Select'
import { BsSearch } from 'react-icons/bs'
import Input from '../../AppComponents/Input'
import BookingRow from './Components/BookingRow'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'


const BookingsTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [selectedStatus, setSelectedStatus] = useState('')
   const [requestFilter, setRequestFilter] = useState('')
   const [orderBy, setOrderBy] = useState('orderDate')

   const bookingsToDisplayByStatus = selectedStatus ? bookings.filter(booking => booking.status === selectedStatus) : bookings
   const bookingsToDisplayByRequest = requestFilter ? bookingsToDisplayByStatus.filter(booking => booking.request.includes(requestFilter)) : bookingsToDisplayByStatus
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
            <Input
               value={requestFilter}
               onChange={(e) => setRequestFilter(e.target.value)}
               label='Search Customer'
               className='!bw-0 !pr-40 !bg-fff/70'
               wrapperClassName='ml-16'
            >
               <BsSearch className='pos-a r-8 t-50% -translate-y-50% fill-text-silver scale-80' />
            </Input>
            <Select
               disableLabelAsOption={true}
               wrapperClassName='h-40 ml-a'
               className='tf-app-semibold !tc-green-dark'
               label='Order By'
               optionsMap={options}
               value={orderBy}
               onChange={(e) => setOrderBy(e.target.value)} />
         </div>
         <div className='bg-fff br-12 fg1 my-16'>
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
               {bookingsToDisplayInCurrentPage.map((booking, index) => (
                  <BookingRow key={index} className='grid grid-cols-8 g-8 gcc pr-40' data={booking} />
               ))}
            </div>
         </div>
         <div className='frcb py-16'>
            <q className='ts-14 tf-app-regular tc-text-grey-darker'>
               {`Showing ${page * ammountPerPage} - ${(page) * ammountPerPage + bookingsToDisplayInCurrentPage.length} of ${bookingsToDisplayByRequest.length} Filtered Data; out of All ${bookings.length} Data`}
            </q>
            <Navigation page={page} pages={pages} setPage={setPage} />
         </div>
      </div >
   )
}
export default BookingsTable