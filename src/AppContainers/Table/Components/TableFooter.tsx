import Navigation from "../../../AppComponentsShared/Navigation"

type TTableFooter = {
   page: number,
   pages: number,
   setPage: (v: any) => any,
   ammountPerPage: number
   currentDataLength: number,
   filteredDataLength: number,
   maxDataLength: number,
}
const TableFooter = ({ page, pages, setPage, ammountPerPage, currentDataLength, filteredDataLength, maxDataLength }: TTableFooter) => {
   return (
      <div className='frcb py-16px'>
         <q className='ts-14px tf-app-regular tc-text-grey-dark-787878'>
            {`Showing ${page * ammountPerPage} - ${(page) * ammountPerPage + currentDataLength} of ${filteredDataLength} Filtered Data; out of All ${maxDataLength} Data`}
         </q>
         <Navigation page={page} pages={pages} setPage={setPage} />
      </div>
   )
}
export default TableFooter