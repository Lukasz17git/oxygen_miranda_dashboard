import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"
import { tw } from "tailwind-multi-class"

const TableButton = ({ text, isActive, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { text?: string, isActive?: boolean }) => {
   return (
      <button
         {...props}
         className={tw(
            `${props.className || ''}`,
            'tw-base-button bg-transparent bw-0 bbw-2px tw br-0',
            isActive ? 'tc-text-green-dark-135846 bc-border-green-dark-135846' : 'tc-text-grey-dark-787878 bc-border-silver-EBEBEB',
         )}
      >
         {text}
      </button>
   )
}

export default TableButton