import { DetailedHTMLProps, HTMLAttributes } from "react"


const Badge = ({ text, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & { text?: string }) => {
   return (
      <span
         {...props}
         className={`pos-a t-6 r-6 h-fit min-h-20 w-fit min-w-21 px-3 frcc br-4 bg-red-main tc-white translate-x-50% -translate-y-50% ts-12 tf-app-semibold ${props.className || ''}`}>
         {text}
      </span>
   )
}

export default Badge