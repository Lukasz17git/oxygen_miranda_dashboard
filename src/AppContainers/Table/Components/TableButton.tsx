import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

const TableButton = ({ text, isActive, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { text?: string, isActive?: boolean }) => {
   return (
      <button
         {...props}
         className={`tw-base-button bg-transparent bw-0 bbw-2 tw br-0 ${isActive ? 'tc-green-dark bc-green-dark' : 'bc-color-separator tc-text-grey-darker'} ${props.className || ''}`}
      >
         {text}
      </button>
   )
}

export default TableButton