import { tw } from "tailwind-multi-class"
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

   // TODO Me quede aqui
   const isCurrentPage = (pageIndex, index) => pageIndex + index === page
   return (
      <div className='frcc g-8px'>
         <NavigationSideButton text='Prev' onClick={prevPage} disabled={isPrevDisabled} />
         {paginationArray.map((pageIndex, index) => (
            <ActionIcon
               key={index}
               onClick={() => setPage(pageIndex + index)}
               className={tw(
                  'br-8px',
                  isCurrentPage(pageIndex, index) ? 'bg-green-dark tc-text-white-fff' : 'h:bc-green-dark h:bg-input-bg-white',
                  {
                     dark: isCurrentPage(pageIndex, index)
                        ? 'tc-text-white-fff bg-dark-green h:bg-dark-green bc-green-light/20'
                        : 'tc-dark-white h:bg-dark-green/10 h:bc-dark-green/90'
                  }
               )}
            >
               {pageIndex + index + 1}
            </ActionIcon>
         ))
         }
         <NavigationSideButton text='Next' onClick={nextPage} disabled={isNextDisabled} />
      </div >
   )
}


const NavigationSideButton = ({ text, disabled, onClick }) => {
   return (
      <Button
         disabled={disabled}
         text={text}
         onClick={onClick}
         className={tw(
            'min-w-80px',
            disabled ? 'bg-transparent bc-green-dark/30 tc-green-dark/50' : 'bc-green-dark',
            { dark: !disabled && 'bc-green-light/20 bg-dark-green' },
         )
         }
      />
   )
}
export default Navigation