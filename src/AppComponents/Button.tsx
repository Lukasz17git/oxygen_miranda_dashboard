import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

const Button = ({ text, children, ...props }: { text?: string } & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
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