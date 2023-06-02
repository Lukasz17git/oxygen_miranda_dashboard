import { getDayMonthYear, getTime } from "../../../Utils/formatDate"


const CellBigDate = ({ date }) => {
   return (
      <div className="fc">
         <b className="tf-app-regular ts-15 dark:tc-dark-white">{getDayMonthYear(date)}</b>
         <span className="tf-app-light ts-14 tc-text-grey-darker dark:tc-dark-silver">{getTime(date)}</span>
      </div>
   )
}
export default CellBigDate