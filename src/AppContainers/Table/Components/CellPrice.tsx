import { tw } from "tailwind-multi-class"


const CellPrice = ({ price }: { price: number }) => {
   return (
      <b className={tw(
         "ts-20. tf-app-semibold tc-text-dark",
         { after: "content-['/night'] tf-app-light ts-14. tc-text-silver-B2B2B2 pl-2." },
      )}>
         {'$' + price / 100}
      </b>
   )
}
export default CellPrice