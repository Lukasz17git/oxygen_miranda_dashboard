import { useState } from 'react'
import TableButton from './Components/TableButton'
import TableLabel from './Components/TableLabel'
import TableLabels from './Components/TableLabels'
import TableFooter from './Components/TableFooter'
import OrderBySelect from './Components/OrderBySelect'
import DndWrapper from '../../AppComponentsShared/DndWrapper'
import ReviewsRow from './Components/ReviewsRow'
import TableContentLayout from './Components/TableContentLayout'
import { useTypedSelector } from '../../Store/store'
import { shallowEqual } from 'react-redux'
import { ReviewType } from '../../Store/Slices/Reviews/reviews.types'

const ReviewsTable = () => {

   const ammountPerPage = 8
   const [page, setPage] = useState(0)

   const [labelFilter, setLabelFilter] = useState('')
   const [orderBy, setOrderBy] = useState('newest')

   const numberOfReviews = useTypedSelector(state => state.reviews.length)
   const reviewsArrayToShow = useTypedSelector(state => {
      const reviews = state.reviews
      const byLabelFilter = labelFilter ? reviews.filter(review => labelFilter === 'archived' ? review.archived : !review.archived) : reviews
      return byLabelFilter
   }, shallowEqual)

   const numberOfReviewsToShow = reviewsArrayToShow.length

   const dataToDisplayInCurrentPage = reviewsArrayToShow.slice(page * ammountPerPage, (page + 1) * ammountPerPage)

   const pages = Math.ceil(numberOfReviewsToShow / ammountPerPage)

   type TLabelFilterStates = '' | 'archived' | 'nonArchived'
   const isActive = (status: TLabelFilterStates) => status === labelFilter
   const handleLabelButton = (status: TLabelFilterStates) => {
      setLabelFilter(status)
      setPage(0)
   }

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
               isActive={isActive('')}
            />
            <TableButton
               text='Non-Archived Reviews'
               onClick={() => handleLabelButton('nonArchived')}
               isActive={isActive('nonArchived')}
            />
            <TableButton
               text='Archived Reviews'
               onClick={() => handleLabelButton('archived')}
               isActive={isActive('archived')}
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
                  Component={({ data }: { data: ReviewType }) => (
                     <ReviewsRow className='grid grid-cols-8 g-8px gcc pr-40px' data={data} />
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
            filteredDataLength={numberOfReviewsToShow}
            maxDataLength={numberOfReviews}
         />
      </div >
   )
}
export default ReviewsTable
