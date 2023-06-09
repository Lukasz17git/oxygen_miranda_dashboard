import { useState } from 'react'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'
import rooms from '../../JsonData/rooms'
import RoomRow from './Components/RoomRow'
import TableFooter from './Components/TableFooter'
import SearchInput from './Components/SearchInput'
import OrderBySelect from './Components/OrderBySelect'
import DndWrapper from '../../AppComponentsShared/DndWrapper'
import TableContentLayout from './Components/TableContentLayout'


const RoomsTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [labelFilter, setLabelFilter] = useState('')
   const [searchFilter, setSearchFilter] = useState('')
   const [orderBy, setOrderBy] = useState('availability')

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
            <SearchInput label='Search Room' value={searchFilter} setValue={setSearchFilter} />
            <OrderBySelect label='Order By' options={options} value={orderBy} setValue={setOrderBy} />
         </div>
         <TableContentLayout>
            <TableLabels gridClassName='grid grid-cols-9 g-8px gcc pr-40px'>
               <TableLabel className='col-span-3' text='Room' />
               <TableLabel text='Type' />
               <TableLabel className='col-span-2' text='Amenities' />
               <TableLabel text='Price' />
               <TableLabel text='Offer' />
               <TableLabel text='Status' />
            </TableLabels>
            <div>
               <DndWrapper
                  key={Date.now()}
                  data={dataToDisplayInCurrentPage}
                  Component={({ data }) => (
                     <RoomRow data={data} className='grid grid-cols-9 g-8px gcc pr-40px' />
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
            filteredDataLength={dataToDisplayBySearchFilter.length}
            maxDataLength={rooms.length}
         />
      </div >
   )
}
export default RoomsTable
