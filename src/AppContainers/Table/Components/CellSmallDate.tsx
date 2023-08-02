import { getFullDate } from "../../../Utils/formatDate"


const CellSmallDate = ({ date }: { date: string | number }) => {
   return (
      <div>
         <b className="tf-app-regular ts-15. tc-text-dark-393939">{getFullDate(date)}</b>
      </div>
   )
}
export default CellSmallDate