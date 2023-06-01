

const CellPrice = ({ price }) => {
   return (
      <b className="ts-20 tf-app-semibold tc-text-dark after:content-['/night'] after:tf-app-light after:ts-14 after:tc-text-silver after:pl-2">
         {'$' + price / 100}
      </b>
   )
}
export default CellPrice