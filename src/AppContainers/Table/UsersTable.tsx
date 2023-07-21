import { useState } from 'react'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'
import TableFooter from './Components/TableFooter'
import OrderBySelect from './Components/OrderBySelect'
import DndWrapper from '../../AppComponentsShared/DndWrapper'
import SearchInput from './Components/SearchInput'
import UserRow from './Components/UserRow'
import TableContentLayout from './Components/TableContentLayout'
import { useTypedSelector } from '../../Store/store'
import { shallowEqual } from 'react-redux'
import NewFormButton from './Components/NewFormButton'
import { UserStatusType, UserType } from '../../Store/Slices/Users/users.types'


const UsersTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [labelFilter, setLabelFilter] = useState('')
   const [searchFilter, setSearchFilter] = useState('')
   const [orderBy, setOrderBy] = useState('lowestDischargeDate')

   const numberOfEmployees = useTypedSelector(state => state.employees.length)
   const employeesArrayToShow = useTypedSelector(state => {
      const employees = state.employees
      const byLabelFilter = labelFilter ? employees.filter(employee => employee.status === labelFilter) : employees
      const bySearchFilter = searchFilter ? byLabelFilter.filter(({ name, lastname }) => `${name} ${lastname}`.toLowerCase().includes(searchFilter)) : byLabelFilter
      return bySearchFilter
   }, shallowEqual)

   console.log('employeesArrayToShow', employeesArrayToShow)

   const numberOfEmployeesToShow = employeesArrayToShow.length

   const dataToDisplayInCurrentPage = employeesArrayToShow.slice(page * ammountPerPage, (page + 1) * ammountPerPage)

   const pages = Math.ceil(numberOfEmployeesToShow / ammountPerPage)

   const isActive = (status: UserStatusType | '') => status === labelFilter
   const handleLabelButton = (status: UserStatusType | '') => {
      setLabelFilter(status)
      setPage(0)
   }

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
            <TableButton text='Vacation' onClick={() => handleLabelButton('vacation')} isActive={isActive('vacation')} />
            <TableButton text='Inactive' onClick={() => handleLabelButton('inactive')} isActive={isActive('inactive')} />
            <SearchInput label='Search Employee' value={searchFilter} setValue={setSearchFilter} />
            <OrderBySelect label='Order By' options={options} value={orderBy} setValue={setOrderBy} />
            <NewFormButton />
         </div>
         <TableContentLayout>
            <TableLabels gridClassName='grid grid-cols-10 g-8px gcc pr-40px'>
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
                  Component={({ data }: { data: UserType }) => (
                     <UserRow className='grid grid-cols-10 g-8px gcc pr-40px' data={data} />
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
            filteredDataLength={numberOfEmployeesToShow}
            maxDataLength={numberOfEmployees}
         />
      </div >
   )
}

export default UsersTable
