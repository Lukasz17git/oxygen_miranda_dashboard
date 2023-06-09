import { useState } from 'react'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'
import TableFooter from './Components/TableFooter'
import OrderBySelect from './Components/OrderBySelect'
import DndWrapper from '../../AppComponentsShared/DndWrapper'
import ContactRow from './Components/ContactRow'
import TableContentLayout from './Components/TableContentLayout'

import comments from '../../JsonData/comments'

const ContactsTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [labelFilter, setLabelFilter] = useState('')
   const [orderBy, setOrderBy] = useState('newest')

   const dataToDisplayByLabelFilter = labelFilter ? comments.filter(comment => comment.archived) : comments
   const dataToDisplayInCurrentPage = dataToDisplayByLabelFilter.slice(page * ammountPerPage, (page + 1) * ammountPerPage)

   //Pagination
   const pages = Math.ceil(dataToDisplayByLabelFilter.length / ammountPerPage)

   const isActive = (statusId) => statusId === labelFilter
   const handleLabelButton = (statusId) => {
      setLabelFilter(statusId)
      setPage(0)
   }

   //Select Options
   const options = {
      newest: 'Newest',
      oldest: 'Oldest',
   }

   return (
      <div className='h-100% fc'>
         <div className='frc'>
            <TableButton
               text='New Reviews'
               onClick={() => handleLabelButton('')}
               isActive={'' === labelFilter}
            />
            <TableButton
               text='Archived Reviews'
               onClick={() => handleLabelButton('archived')}
               isActive={'archived' === labelFilter}
            />
            <OrderBySelect
               label='Order By'
               options={options}
               value={orderBy}
               setValue={setOrderBy}
            />
         </div>
         <TableContentLayout>
            <TableLabels gridClassName='grid grid-cols-8 g-8px gcc pr-40px'>
               <TableLabel className='col-span-2' text='Person' />
               <TableLabel text='Sent at' />
               <TableLabel text='Subject' />
               <TableLabel className='col-span-3' text='Comment' />
               <TableLabel text='Save' />
            </TableLabels>
            <div>
               <DndWrapper
                  key={Date.now()}
                  data={dataToDisplayInCurrentPage}
                  Component={({ data }) => (
                     <ContactRow className='grid grid-cols-8 g-8px gcc pr-40px' data={data} />
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
            filteredDataLength={dataToDisplayByLabelFilter.length}
            maxDataLength={comments.length}
         />
      </div >
   )
}
export default ContactsTable
