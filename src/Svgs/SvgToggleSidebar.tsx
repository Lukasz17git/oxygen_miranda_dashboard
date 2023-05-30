import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
   <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={`tw-base-icon ${props.className || ""}`}
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M4 8h9m-9 4h16m0 0-3-3m3 3-3 3M4 16h9"
      />
   </svg>
)
export default SvgComponent
