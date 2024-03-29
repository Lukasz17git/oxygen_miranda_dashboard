import { getDayMonthYear, getTime } from "../../../Utils/formatDate"


const CellBigDate = ({ date }: { date: string | number }) => {
   return (
      <div className="fc">
         <b className="tf-app-regular ts-15.">{getDayMonthYear(date)}</b>
         <span className="tf-app-light ts-14. tc-text-grey-dark-787878">{getTime(date)}</span>
      </div>
   )
}
export default CellBigDate