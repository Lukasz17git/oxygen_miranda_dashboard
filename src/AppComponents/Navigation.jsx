import ActionIcon from "./ActionIcon"
import Button from "./Button"


const Navigation = ({ page, pages, setPage }) => {

   const nextPage = () => page + 1 !== pages && setPage(page + 1)
   const prevPage = () => page !== 0 && setPage(page - 1)
   const maxPaginationDisplayNumberSides = 3
   const paginationLength = Math.min(pages, maxPaginationDisplayNumberSides * 2 + 1)
   const startPageIndex = pages <= 2 * maxPaginationDisplayNumberSides + 1 ?
      0 : page <= maxPaginationDisplayNumberSides ?
         0 : pages - page <= maxPaginationDisplayNumberSides + 1 ?
            pages - maxPaginationDisplayNumberSides * 2 - 1 : page - maxPaginationDisplayNumberSides
   const paginationArray = Array(paginationLength).fill(startPageIndex)

   return (
      <div className='frcc g-8'>
         <Button text='Prev' onClick={prevPage} className='bg-input-bg-white bc-green-dark min-w-80' />
         {paginationArray.map((pageIndex, index) => (
            <ActionIcon
               key={index}
               className={`br-8 ${pageIndex + index === page ? 'bg-green-dark tc-white' : 'h:bc-green-dark h:bg-input-bg-white'}`}
               onClick={() => setPage(pageIndex + index)}
            >
               {pageIndex + index + 1}
            </ActionIcon>
         ))}
         <Button text='Next' onClick={nextPage} className='bg-input-bg-white bc-green-dark min-w-80' />
      </div>
   )
}
export default Navigation