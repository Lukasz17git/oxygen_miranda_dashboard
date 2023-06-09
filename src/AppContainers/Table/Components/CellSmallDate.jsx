import { getFullDate } from "../../../Utils/formatDate"


const CellSmallDate = ({ date }) => {
   return (
      <div>
         <b className="tf-app-regular ts-15px tc-text-dark-393939">{getFullDate(date)}</b>
      </div>
   )
}
export default CellSmallDate