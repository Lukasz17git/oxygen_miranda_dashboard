

const TableLabels = ({ children, gridClassName }) => {
   return (
      <div className={`min-h-48 py-6 bbc-color-separator bbw-1 dark:bbc-dark-hover dark:bbw-1 ${gridClassName}`}>
         {children}
      </div>
   )
}
export default TableLabels