import { useState } from 'react'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'
import RoomRow from './Components/RoomRow'
import TableFooter from './Components/TableFooter'
import SearchInput from './Components/SearchInput'
import OrderBySelect from './Components/OrderBySelect'
import DndWrapper from '../../AppComponentsShared/DndWrapper'
import TableContentLayout from './Components/TableContentLayout'
import { useTypedSelector } from '../../Store/store'
import { shallowEqual } from 'react-redux'
import { RoomType, RoomsTypes } from '../../Store/Slices/Rooms/rooms.types'
import NewFormButton from './Components/NewFormButton'


const RoomsTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [labelFilter, setLabelFilter] = useState('')
   const [searchFilter, setSearchFilter] = useState('')
   const [orderBy, setOrderBy] = useState('availability')

   const numberOfRooms = useTypedSelector(state => state.rooms.length)
   const roomsArrayToShow = useTypedSelector(state => {
      const rooms = state.rooms
      const byLabelFilter = labelFilter ? rooms.filter(room => room.type === labelFilter) : rooms
      const bySearchFilter = searchFilter ? byLabelFilter.filter(room => room.number.toLowerCase().includes(searchFilter)) : byLabelFilter
      return bySearchFilter
   }, shallowEqual)

   const numberOfRoomsToShow = roomsArrayToShow.length
   const dataToDisplayInCurrentPage = roomsArrayToShow.slice(page * ammountPerPage, (page + 1) * ammountPerPage)
   const pages = Math.ceil(numberOfRoomsToShow / ammountPerPage)

   const isActive = (status: RoomsTypes | '') => status === labelFilter
   const handleLabelButton = (status: RoomsTypes | '') => {
      setLabelFilter(status)
      setPage(0)
   }

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
            <NewFormButton />
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
                  Component={({ data }: { data: RoomType }) => (
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
            filteredDataLength={numberOfRoomsToShow}
            maxDataLength={numberOfRooms}
         />
      </div >
   )
}
export default RoomsTable
