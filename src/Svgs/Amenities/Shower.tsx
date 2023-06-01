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
         <g clipPath="url(#b)">
            <g clipPath="url(#c)">
               <path d="M10.77 9.89a.314.314 0 0 0-.312.313.315.315 0 0 0 .313.313.315.315 0 0 0 .312-.313.314.314 0 0 0-.313-.312Z" />
               <path d="M16 9.516c0-.443-.29-.818-.688-.95V2.237A1.69 1.69 0 0 0 13.625.55h-.665a1.69 1.69 0 0 0-1.663 1.403 1.469 1.469 0 0 0-1.178 1.438v.346c0 .173.14.313.313.313h2.307c.173 0 .313-.14.313-.313v-.346c0-.689-.478-1.268-1.119-1.424.12-.456.535-.792 1.027-.792h.665c.585 0 1.062.476 1.062 1.062v6.279H7.972a.997.997 0 0 0-.66-.25H4.563a.997.997 0 0 0-.661.25H1a1.001 1.001 0 0 0-.312 1.95v1.227c0 .923.324 1.771.863 2.439l-.52.937a1.002 1.002 0 0 0 .374 1.347.99.99 0 0 0 .765.097.99.99 0 0 0 .605-.478l.397-.719c.435.17.908.262 1.401.262h6.854c.493 0 .966-.093 1.4-.262l.398.719a.99.99 0 0 0 .874.515.991.991 0 0 0 .496-.134c.468-.27.635-.874.374-1.347l-.52-.938c.54-.667.863-1.515.863-2.438v-1.228c.399-.131.687-.507.687-.95ZM12.426 3.39v.034h-1.683V3.39a.842.842 0 0 1 1.683 0Zm-7.863 5.5H7.31c.208 0 .376.168.376.376v3.248h-3.5V9.267c0-.208.17-.376.377-.376ZM1 9.14h2.571a1.006 1.006 0 0 0-.008.126v.624H1a.375.375 0 0 1 0-.75Zm1.228 6.591a.37.37 0 0 1-.51.143.374.374 0 0 1-.14-.503l.426-.768c.186.165.39.313.605.44l-.38.688Zm12.055.143a.37.37 0 0 1-.511-.143l-.381-.688c.216-.128.418-.275.605-.44l.426.768a.373.373 0 0 1-.14.502Zm.716-5.984h-2.822a.312.312 0 1 0 0 .625h2.51v1.177a3.264 3.264 0 0 1-3.26 3.26H4.573a3.264 3.264 0 0 1-3.26-3.26v-1.177h2.25v2.312c0 .173.14.313.312.313H8c.173 0 .312-.14.312-.313v-2.312h1.053a.312.312 0 1 0 0-.625H8.312v-.624c0-.043-.003-.085-.008-.126H15a.375.375 0 0 1 0 .75Z" />
            </g>
         </g>
      </g>
      <defs>
         <clipPath id="a">
            <path fill="#fff" d="M0 .55h16v16H0z" />
         </clipPath>
         <clipPath id="b">
            <path fill="#fff" d="M0 .55h16v16H0z" />
         </clipPath>
         <clipPath id="c">
            <path fill="#fff" d="M0 .55h16v16H0z" />
         </clipPath>
      </defs>
   </svg>
)
export default SvgComponent
