import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

const TableButton = ({ text, isActive, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { text?: string, isActive?: boolean }) => {
   return (
      <button
         {...props}
         className={`tw-base-button bg-transparent bw-0 bbw-2 tw br-0
          ${isActive ? 'tc-green-dark bc-green-dark dark:tc-dark-green dark:bbc-dark-green'
               : 'bc-color-separator tc-text-grey-darker dark:tc-dark-grey dark:bbc-dark-hover'} ${props.className || ''}`}
      >
         {text}
      </button>
   )
}

export default TableButton