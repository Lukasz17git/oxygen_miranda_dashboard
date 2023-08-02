

const CellStatus = ({ text, className }: { text: string, className: string }) => {
   return (
      <div className={`${className} tw-base-button w-100. br-10. tcap h-36.`}>
         {text}
      </div>
   )
}
export default CellStatus