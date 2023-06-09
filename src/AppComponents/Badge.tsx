import { DetailedHTMLProps, HTMLAttributes } from "react"
import { tw } from "tailwind-multi-class"

type BadgeType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & { text?: string }

const Badge = ({ text, ...props }: BadgeType) => {
   return (
      <span
         {...props}
         className={tw(
            props.className || '',
            'pos-a t-6px r-6px h-fit min-h-20px w-fit min-w-21px px-3px frcc',
            'br-4px bg-badge-bg tc-badge-tc translate-x-50% -translate-y-50% ts-12px tf-app-semibold',
            { dark: '' }
         )}>
         {text}
      </span>
   )
}

export default Badge