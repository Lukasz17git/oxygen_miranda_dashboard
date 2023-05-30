import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

const ImgIcon = ({ src, ...props }: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {

   const name = src?.slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))

   return (
      <img
         src={src}
         alt={name}
         loading="lazy"
         {...props}
         className={`tw-base-icon ${props.className || ''}`}
      />
   )
}

export default ImgIcon