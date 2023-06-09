import { getDayMonthYear, getTime } from "../../../Utils/formatDate"


const CellBigDate = ({ date }) => {
   return (
      <div className="fc">
         <b className="tf-app-regular ts-15px">{getDayMonthYear(date)}</b>
         <span className="tf-app-light ts-14px tc-text-grey-dark-787878">{getTime(date)}</span>
      </div>
   )
}
export default CellBigDate