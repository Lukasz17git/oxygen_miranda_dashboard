

const CellText = ({ text, className }: { text: string, className: string }) => {
   return (
      <p className={`${className} text-ellipsis w-90% tw tc oh ts-15px tc-text-black-262626`}>{text}</p>
   )
}
export default CellText