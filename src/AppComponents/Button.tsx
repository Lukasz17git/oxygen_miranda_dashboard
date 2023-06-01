import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

const Button = ({ text, children, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { text?: string }) => {
   return (
      <button
         {...props}
         className={`tw-base-button ${props.className || ''}`}
      >
         {text && text}
         {children}
      </button>
   )
}

export default Button