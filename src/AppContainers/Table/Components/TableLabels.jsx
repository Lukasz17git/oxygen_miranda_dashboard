

const TableLabels = ({ children, gridClassName }) => {
   return (
      <div className={`min-h-48 py-6 bc-color-separator bw-0 bbw-1 ${gridClassName}`}>
         {children}
      </div>
   )
}
export default TableLabels