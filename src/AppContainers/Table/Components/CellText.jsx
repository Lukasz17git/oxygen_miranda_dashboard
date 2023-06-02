

const CellText = ({ text, className }) => {
   return (
      <p className={`${className} text-ellipsis w-90% tw tc oh ts-15 tc-text-black`}>{text}</p>
   )
}
export default CellText