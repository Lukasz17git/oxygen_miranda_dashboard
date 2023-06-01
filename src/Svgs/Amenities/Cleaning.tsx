import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
   <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={`tw-base-icon ${props.className ?? ""}`}
      viewBox="0 0 16 16"
   >
      <g clipPath="url(#a)">
         <path d="M4.655 3.427c.563.253.79.85.86 1.095a.274.274 0 0 0 .266.2c.123 0 .23-.08.264-.2.072-.245.298-.842.862-1.095a.277.277 0 0 0 0-.503c-.564-.253-.79-.85-.862-1.095a.274.274 0 0 0-.264-.2c-.124 0-.23.08-.265.2-.071.245-.298.842-.861 1.095a.277.277 0 0 0 0 .503ZM5.78 2.421c.13.253.33.539.63.754-.3.216-.5.502-.63.754a2.104 2.104 0 0 0-.63-.754c.3-.215.5-.5.63-.754ZM4.228 4.753a.293.293 0 0 0 0-.533C3.415 3.855 3.09 3 2.988 2.65a.29.29 0 0 0-.28-.21.29.29 0 0 0-.28.21C2.326 3 2 3.855 1.188 4.22a.293.293 0 0 0 0 .533c.813.365 1.138 1.22 1.24 1.57a.29.29 0 0 0 .28.21.29.29 0 0 0 .28-.21c.102-.35.427-1.205 1.24-1.57Zm-1.52.982c-.181-.403-.499-.91-1.031-1.249.532-.339.85-.845 1.03-1.248.182.403.5.909 1.032 1.248-.533.34-.85.846-1.031 1.249ZM14.984 15.457l-.05-.686v-.007a30.756 30.756 0 0 0-.324-2.253c-.147-1.035-.79-1.51-1.303-1.725a2.667 2.667 0 0 0-.332-.114v-6.28a.234.234 0 1 0-.468 0v6.192a2.31 2.31 0 0 0-.53 0V2.603h.53v.684a.234.234 0 0 0 .468 0V.733a.734.734 0 0 0-1.467 0v9.94a2.66 2.66 0 0 0-.332.113c-.121.05-.25.116-.376.2l.083-1.567a.473.473 0 0 0 .35-.456v-.645a.473.473 0 0 0-.472-.473h-.085a.9.9 0 0 0-1.16-1.164 1.12 1.12 0 0 0-1.27-.423A1.446 1.446 0 0 0 6.84 5.151c-.68 0-1.253.473-1.405 1.107A1.112 1.112 0 0 0 3.97 7.313c0 .188.047.37.131.532h-.158a.473.473 0 0 0-.472.473v.645c0 .218.149.402.35.456l.106 1.992-.691.691a.67.67 0 0 0-.198.477.67.67 0 0 0 .675.675.676.676 0 0 0 .309-.074l.09 1.696c.034.63.554 1.124 1.186 1.124h4.11c.127 0 .25-.02.365-.058a.507.507 0 0 0 .233.058h4.473a.509.509 0 0 0 .506-.543ZM11.976.733a.266.266 0 0 1 .531 0v1.401h-.53v-1.4Zm.26 10.305h.012c.064-.001 1.493-.02 1.846 1.28H10.73l.037-.695c.553-.597 1.418-.586 1.47-.585Zm-7.154-4.37c.148 0 .288.05.403.142a.234.234 0 0 0 .38-.189v-.027a.977.977 0 0 1 1.952 0v.027a.234.234 0 0 0 .38.19.648.648 0 0 1 1.006.274.234.234 0 0 0 .363.1.433.433 0 0 1 .558.66H4.697a.68.68 0 0 1-.26-.532c0-.356.29-.645.646-.645Zm-1.144 1.65c0-.003.002-.005.004-.005h6.82c.002 0 .003.002.003.005v.645a.004.004 0 0 1-.004.004H8.812a.75.75 0 0 0-.7.471.816.816 0 0 1-.815.512l.438-.439a.67.67 0 0 0 .198-.477.676.676 0 0 0-1.152-.477l-.512.51a.758.758 0 0 0-.378-.1H3.942a.004.004 0 0 1-.004-.004v-.645ZM5.9 9.436l-1.53 1.53-.082-1.53h1.612Zm3.506 6.096h-4.11a.72.72 0 0 1-.719-.68l-.11-2.074 1.007-1.007a.234.234 0 1 0-.33-.33l-1.287 1.285a.207.207 0 0 1-.292-.293L7.11 8.887a.207.207 0 0 1 .293.293l-1.47 1.47a.234.234 0 1 0 .332.33l.64-.64a1.292 1.292 0 0 0 1.64-.727.284.284 0 0 1 .266-.178h1.602l-.29 5.416a.72.72 0 0 1-.717.681Zm5.1-.012a.039.039 0 0 1-.03.012h-.73a10.87 10.87 0 0 0-.275-1.8.234.234 0 0 0-.453.119c.002.008.187.725.258 1.681h-.801v-1.74a.234.234 0 0 0-.468 0v1.74h-.802c.07-.95.255-1.67.258-1.681a.234.234 0 1 0-.453-.118c-.009.034-.203.786-.275 1.799h-.385c.14-.183.228-.41.241-.656l.112-2.09h3.48c.064.364.202 1.196.284 2.021l.049.683a.039.039 0 0 1-.01.03Z" />
      </g>
      <defs>
         <clipPath id="a">
            <path fill="#fff" d="M0 0h16v16H0z" />
         </clipPath>
      </defs>
   </svg>
)
export default SvgComponent
