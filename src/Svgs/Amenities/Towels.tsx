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
         <path
            d="M15.452 2.72h-2.027a1.214 1.214 0 0 0-1.163-.889H4.214c-.556 0-1.024.377-1.163.889H.548A.549.549 0 0 0 0 3.268v.514c0 .302.246.548.548.548h2.46v4.41a.235.235 0 1 0 .47 0V3.038c0-.406.33-.736.736-.736h7.093a1.2 1.2 0 0 0-.25.736v8.502h-7.58V9.68a.235.235 0 0 0-.47 0v4.884c0 .388.317.704.705.704h7.11a.705.705 0 0 0 .704-.704v-3.42h1.237a.705.705 0 0 0 .704-.705V6.328a.235.235 0 0 0-.47 0v4.11c0 .13-.105.236-.234.236h-1.237V4.33h1.472v1.058a.235.235 0 1 0 .47 0V4.33h1.984A.549.549 0 0 0 16 3.782v-.514a.549.549 0 0 0-.548-.548ZM.548 3.86a.078.078 0 0 1-.078-.078v-.514c0-.043.035-.079.078-.079h2.46v.672H.548ZM12.262 2.3a.74.74 0 0 1 .663.42h-1.327a.737.737 0 0 1 .664-.42ZM10.822 14.8h-7.11a.235.235 0 0 1-.234-.235v-1.01H8.35a.235.235 0 0 0 0-.47H3.478V12.01h7.578v1.076H9.29a.235.235 0 0 0 0 .47h1.767v1.009c0 .13-.105.235-.235.235ZM15.53 3.782a.078.078 0 0 1-.078.079h-3.926v-.672h3.926c.043 0 .078.036.078.079v.514Z"
         />
      </g>
      <defs>
         <clipPath id="a">
            <path fill="#fff" d="M0 .55h16v16H0z" />
         </clipPath>
      </defs>
   </svg>
)
export default SvgComponent
