import { getFullDate } from "../../../Utils/formatDate"


const CellSmallDate = ({ date }) => {
   return (
      <div>
         <b className="tf-app-regular ts-15 tc-text-dark">{getFullDate(date)}</b>
      </div>
   )
}
export default CellSmallDate