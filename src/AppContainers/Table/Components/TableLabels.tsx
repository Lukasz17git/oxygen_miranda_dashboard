

const TableLabels = ({ children, gridClassName }: { children: React.ReactNode, gridClassName: string }) => {
   return (
      <div className={`min-h-48px py-6px bbc-border-silver-EBEBEB bbw-1px ${gridClassName}`}>
         {children}
      </div>
   )
}
export default TableLabels