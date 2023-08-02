

const TableLabels = ({ children, gridClassName }: { children: React.ReactNode, gridClassName: string }) => {
   return (
      <div className={`min-h-48. py-6. bbc-border-silver-EBEBEB bbw-1. ${gridClassName}`}>
         {children}
      </div>
   )
}
export default TableLabels