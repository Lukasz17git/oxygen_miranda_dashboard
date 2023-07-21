
const CellBold = ({ text, className }: { text: string, className?: string }) => {
   return (
      <b className={`${className} tf-app-semibold`}>{text}</b>
   )
}
export default CellBold