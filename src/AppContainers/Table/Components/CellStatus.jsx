

const CellStatus = ({ text, className }) => {
   return (
      <div className={`${className} tw-base-button min-w-100 w-100 br-10 tcap h-36`}>
         {text}
      </div>
   )
}
export default CellStatus