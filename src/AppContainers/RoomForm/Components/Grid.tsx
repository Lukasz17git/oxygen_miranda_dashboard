

const Grid = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="g grid-cols-2 grid-rows-1 g-16px">
         {children}
      </div>
   )
}
export default Grid