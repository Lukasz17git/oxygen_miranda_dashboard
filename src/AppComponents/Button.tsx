import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

const Button = ({ text, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { text?: string }) => {
   return (
      <button
         {...props}
         className={`tw-base-button ${props.className || ''}`}
      >
         {text}
      </button>
   )
}

export default Button