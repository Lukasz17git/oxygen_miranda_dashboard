import { DetailedHTMLProps, HTMLAttributes } from "react"
import { tw } from "tailwind-multi-class"

type BadgeType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & { text?: string | number }

const Badge = ({ text, ...props }: BadgeType) => {
   return (
      <span
         {...props}
         className={tw(
            props.className || '',
            'pos-a t-6. r-6. h-fit min-h-20. w-fit min-w-21. px-3. frcc',
            'br-4. bg-badge-bg tc-badge-tc translate-x-50% -translate-y-50% ts-12. tf-app-semibold',
            { dark: '' }
         )}>
         {text}
      </span>
   )
}

export default Badge