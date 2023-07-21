

const CellStatus = ({ text, className }: { text: string, className: string }) => {
   return (
      <div className={`${className} tw-base-button w-100px br-10px tcap h-36px`}>
         {text}
      </div>
   )
}
export default CellStatus