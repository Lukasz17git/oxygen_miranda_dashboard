import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
   <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={`tw-base-icon ${props.className ?? ""}`}
      viewBox="0 0 16 17"
   >
      <g clipPath="url(#a)">
         <path d="M13.156 7.255V5.706A5.162 5.162 0 0 0 8 .55a5.162 5.162 0 0 0-5.156 5.156v1.55a1.408 1.408 0 0 0-.938 1.325v1.875A6.1 6.1 0 0 0 8 16.55a6.1 6.1 0 0 0 6.094-6.094V8.581c0-.611-.392-1.132-.938-1.326ZM8 1.487a4.224 4.224 0 0 1 4.219 4.22v1.468h-.938V5.706A3.285 3.285 0 0 0 8 2.425a3.285 3.285 0 0 0-3.281 3.281v1.469H3.78V5.706A4.224 4.224 0 0 1 8 1.487ZM5.656 7.175V5.706A2.346 2.346 0 0 1 8 3.362a2.346 2.346 0 0 1 2.344 2.344v1.469H5.656Zm7.5 3.281A5.162 5.162 0 0 1 8 15.612a5.162 5.162 0 0 1-5.156-5.156V8.581a.47.47 0 0 1 .469-.469h9.374a.47.47 0 0 1 .47.469v1.875Z" />
         <path d="M8 9.05c-.775 0-1.406.63-1.406 1.406 0 .611.392 1.132.937 1.326v2.424a.469.469 0 0 0 .938 0v-2.424A1.408 1.408 0 0 0 8 9.05Zm0 1.875a.47.47 0 1 1 .001-.939.47.47 0 0 1-.001.939Z" />
      </g>
      <defs>
         <clipPath id="a">
            <path fill="#fff" d="M0 .55h16v16H0z" />
         </clipPath>
      </defs>
   </svg>
)
export default SvgComponent
