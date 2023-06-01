

const CellDiscount = ({ price, discount }) => {

   if (!discount) return <div>-</div>

   const discountPrice = price * (1 - discount / 100)
   return (
      <div className="fc">
         <b className="ts-20 tf-app-semibold tc-red-main after:content-['/night'] after:tf-app-light after:ts-14 after:tc-red-main after:pl-2">
            {'$' + discountPrice / 100}
         </b>
         <div className="tf-app-light ts-13 tc-red-main lh-1.1em">
            <span>(</span>
            <span className="tf-app-semibold">{`-${discount}%`}</span>
            <span> disc.)</span>
         </div>
      </div>
   )
}
export default CellDiscount