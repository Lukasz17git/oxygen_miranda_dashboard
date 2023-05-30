import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

const ActionIcon = ({ children, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {

   return (
      <button {...props} className={`tw-base-action-icon ${props.className || ''}`}>
         {children}
      </button>
   )
}

export default ActionIcon