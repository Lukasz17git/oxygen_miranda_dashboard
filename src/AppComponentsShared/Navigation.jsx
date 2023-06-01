import ActionIcon from "../AppComponents/ActionIcon"
import Button from "../AppComponents/Button"


const Navigation = ({ page, pages, setPage }) => {

   const isNextDisabled = pages === 1 || page + 1 === pages
   const isPrevDisabled = page === 0

   const nextPage = () => !isNextDisabled && setPage(page + 1)
   const prevPage = () => !isPrevDisabled && setPage(page - 1)

   const maxPaginationDisplayNumberSides = 3

   const paginationLength = Math.min(pages, maxPaginationDisplayNumberSides * 2 + 1)
   const startPageIndex = pages <= 2 * maxPaginationDisplayNumberSides + 1 ?
      0 : page <= maxPaginationDisplayNumberSides ?
         0 : pages - page <= maxPaginationDisplayNumberSides + 1 ?
            pages - maxPaginationDisplayNumberSides * 2 - 1 : page - maxPaginationDisplayNumberSides

   const paginationArray = Array(paginationLength).fill(startPageIndex)

   return (
      <div className='frcc g-8'>
         <Button disabled={isPrevDisabled} text='Prev' onClick={prevPage} className={`min-w-80 ${isPrevDisabled ? 'bg-transparent bc-green-dark/30 tc-green-dark/50' : 'bg-input-bg-white bc-green-dark '}`} />
         {paginationArray.map((pageIndex, index) => (
            <ActionIcon
               key={index}
               className={`br-8 ${pageIndex + index === page ? 'bg-green-dark tc-white h:bg-green-dark' : 'h:bc-green-dark h:bg-input-bg-white'}`}
               onClick={() => setPage(pageIndex + index)}
            >
               {pageIndex + index + 1}
            </ActionIcon>
         ))}
         <Button disabled={isNextDisabled} text='Next' onClick={nextPage} className={`min-w-80 ${isNextDisabled ? 'bg-transparent bc-green-dark/30 tc-green-dark/50' : 'bg-input-bg-white bc-green-dark '}`} />
      </div>
   )
}
export default Navigation