
type TableLabelType = { text: string, className?: string }

const TableLabel = ({ text, className }: TableLabelType) => {
   return (
      <b className={`tf-app-semibold tc ts-15. tc-text-dark-393939 lh-1.2em ${className}`}>{text}</b>
   )
}
export default TableLabel