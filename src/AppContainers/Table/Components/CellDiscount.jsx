import { tw } from "tailwind-multi-class"


const CellDiscount = ({ price, discount }) => {

   if (!discount) return <div>-</div>

   const discountPrice = price * (1 - discount / 100)
   return (
      <div className="fc">
         <b className={tw(
            "ts-20px tf-app-semibold tc-text-red-E23428",
            { after: "content-['/night'] tf-app-light ts-14px tc-text-red-E23428 pl-2px" },
         )}>
            {'$' + discountPrice / 100}
         </b>
         <div className="tf-app-light ts-13px tc-text-red-E23428 lh-1.1em">
            <span>(</span>
            <span className="tf-app-semibold">{`-${discount}%`}</span>
            <span> disc.)</span>
         </div>
      </div>
   )
}
export default CellDiscount