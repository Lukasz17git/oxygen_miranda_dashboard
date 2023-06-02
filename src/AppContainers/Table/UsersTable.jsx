import { useState } from 'react'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'
import users from '../../JsonData/users'
import TableFooter from './Components/TableFooter'
import OrderBySelect from './Components/OrderBySelect'
import DndWrapper from '../../AppComponentsShared/DndWrapper'
import SearchInput from './Components/SearchInput'
import UserRow from './Components/UserRow'


const UsersTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [labelFilter, setLabelFilter] = useState('')
   const [searchFilter, setSearchFilter] = useState('')
   const [orderBy, setOrderBy] = useState('lowestDischargeDate')

   const dataToDisplayByLabelFilter = labelFilter ? users.filter(user => user.status === labelFilter) : users
   const dataToDisplayBySearchFilter = searchFilter ? dataToDisplayByLabelFilter.filter(user => `${user.name} ${user.lastname}`.toLowerCase().includes(searchFilter)) : dataToDisplayByLabelFilter
   const dataToDisplayInCurrentPage = dataToDisplayBySearchFilter.slice(page * ammountPerPage, (page + 1) * ammountPerPage)

   //Pagination
   const pages = Math.ceil(dataToDisplayByLabelFilter.length / ammountPerPage)

   const isActive = (statusId) => statusId === labelFilter
   const handleLabelButton = (statusId) => {
      setLabelFilter(statusId)
      setPage(0)
   }

   //Select Options
   const options = {
      lowestDischargeDate: 'Discharge Date -',
      highestDischargeDate: 'Discharge Date +',
      alphabeticallyDescending: 'A to Z',
      alphabeticallyAscending: 'Z to A',
   }

   return (
      <div className='h-100% fc'>
         <div className='frc'>
            <TableButton text='All Employees' onClick={() => handleLabelButton('')} isActive={isActive('')} />
            <TableButton text='Active' onClick={() => handleLabelButton('active')} isActive={isActive('active')} />
            <TableButton text='Inactive' onClick={() => handleLabelButton('inactive')} isActive={isActive('inactive')} />
            <SearchInput label='Search Employee' value={searchFilter} setValue={setSearchFilter} />
            <OrderBySelect label='Order By' options={options} value={orderBy} setValue={setOrderBy} />
         </div>
         <div className='bg-fff br-12 fg1 my-16 dark:bg-dark-mode-black oh'>
            <TableLabels gridClassName='grid grid-cols-10 g-8 gcc pr-40'>
               <TableLabel className='col-span-2' text='Employee' />
               <TableLabel text='Discharge date' />
               <TableLabel className='col-span-2' text='Email' />
               <TableLabel className='col-span-2' text='Phone' />
               <TableLabel className='col-span-2' text='Description' />
               <TableLabel text='Status' />
            </TableLabels>
            <div>
               <DndWrapper
                  data={dataToDisplayInCurrentPage}
                  key={Date.now()}
                  // key={dataToDisplayInCurrentPage}
                  Component={({ data }) => (
                     <UserRow className='grid grid-cols-10 g-8 gcc pr-40' data={data} />
                  )}
               />
            </div>
         </div>
         <TableFooter
            page={page}
            pages={pages}
            setPage={setPage}
            ammountPerPage={ammountPerPage}
            currentDataLength={dataToDisplayInCurrentPage.length}
            filteredDataLength={dataToDisplayByLabelFilter.length}
            maxDataLength={users.length}
         />
      </div >
   )
}

export default UsersTable
