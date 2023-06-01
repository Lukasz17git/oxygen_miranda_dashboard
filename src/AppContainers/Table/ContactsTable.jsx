import { useState } from 'react'
import Navigation from '../../AppComponentsShared/Navigation'
import Select from '../../AppComponents/Select'
import { BsSearch } from 'react-icons/bs'
import Input from '../../AppComponents/Input'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'
import rooms from '../../JsonData/rooms'


const ContactsTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [labelFilter, setLabelFilter] = useState('')
   const [searchFilter, setSearchFilter] = useState('')
   const [orderBy, setOrderBy] = useState('available')

   const dataToDisplayByLabelFilter = labelFilter ? rooms.filter(room => room.type === labelFilter) : rooms
   const dataToDisplayBySearchFilter = searchFilter ? dataToDisplayByLabelFilter.filter(room => room.number.toLowerCase().includes(searchFilter)) : dataToDisplayByLabelFilter
   const dataToDisplayInCurrentPage = dataToDisplayBySearchFilter.slice(page * ammountPerPage, (page + 1) * ammountPerPage)

   //Pagination
   const pages = Math.ceil(dataToDisplayBySearchFilter.length / ammountPerPage)

   const isActive = (statusId) => statusId === labelFilter
   const handleLabelButton = (statusId) => {
      setLabelFilter(statusId)
      setPage(0)
   }

   //Select Options
   const options = {
      lowestPrice: 'Price -',
      highestPrice: 'Price +',
      availability: 'Availability',
      occupied: 'Occupied'
   }

   return (
      <div className='h-100% fc'>
         <div className='frc'>
            <TableButton text='All Rooms' onClick={() => handleLabelButton('')} isActive={isActive('')} />
            <TableButton text='Single' onClick={() => handleLabelButton('single')} isActive={isActive('single')} />
            <TableButton text='Double' onClick={() => handleLabelButton('double')} isActive={isActive('double')} />
            <TableButton text='Superior' onClick={() => handleLabelButton('superior')} isActive={isActive('superior')} />
            <TableButton text='Suite' onClick={() => handleLabelButton('suite')} isActive={isActive('suite')} />
            <Input
               value={searchFilter}
               onChange={(e) => setSearchFilter(e.target.value)}
               label='Search Room'
               className='!bw-0 !pr-40 !bg-fff/70'
               wrapperClassName='ml-16'
            >
               <BsSearch className='pos-a r-8 t-50% -translate-y-50% fill-text-silver scale-80' />
            </Input>
            <Select
               disableLabelAsOption={true}
               wrapperClassName='h-40 ml-a'
               className='tf-app-semibold !tc-green-dark'
               labelClassName='!tc-green-dark'
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
               {dataToDisplayInCurrentPage.map((room, index) => (
                  // <BookingRow key={index} className='grid grid-cols-8 g-8 gcc pr-40' data={room} />
                  <div key={index} />
               ))}
            </div>
         </div>
         <div className='frcb py-16'>
            <q className='ts-14 tf-app-regular tc-text-grey-darker'>
               {`Showing ${page * ammountPerPage} - ${(page) * ammountPerPage + dataToDisplayInCurrentPage.length} of ${dataToDisplayBySearchFilter.length} Filtered Data; out of All ${rooms.length} Data`}
            </q>
            <Navigation page={page} pages={pages} setPage={setPage} />
         </div>
      </div >
   )
}
export default ContactsTable
