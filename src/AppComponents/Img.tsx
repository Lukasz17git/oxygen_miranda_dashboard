import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

const Img = ({ src, ...props }: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {

   const name = src?.slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))

   return (
      <img src={src} alt={name} loading="lazy" {...props} />
   )
}

export default Img