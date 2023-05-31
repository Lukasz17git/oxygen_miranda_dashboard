import { useState } from "react"
import ActionIcon from "../../../AppComponents/ActionIcon"
import Comment from "../../../AppComponentsShared/Comment"
import comments from "../../../JsonData/comments"
import { useKeenSlider } from "keen-slider/react"
import { BsFillArrowRightSquareFill } from 'react-icons/bs'


const Comments = () => {
   const arrayHolder = Array(comments.length).fill().slice(-20)
   const [sliderRef, instanceRef] = useKeenSlider({
      mode: "snap",
      slides: {
         perView: 'auto',// Math.trunc(window.innerWidth / 320 - 1),
         spacing: 15
      },
      defaultAnimation: {
         duration: 1000
      },
      slideChanged(props) {
         const max = props.track.details.maxIdx
         const current = props.track.details.abs
         console.log(current)
         setHidePrev(current === 0 ? true : false)
         setHideNext(current === max ? true : false)

      }
   })
   const nextSlide = () => instanceRef.current?.next()
   const prevSlide = () => instanceRef.current?.prev()
   const [hidePrev, setHidePrev] = useState(true)
   const [hideNext, setHideNext] = useState(comments.length < 4)
   return (
      <div className="pos-r bg-fff br-16 s-card p-16 col-span-4">
         <h3 className="ts-19 tf-app-semibold tc-text-dark p-8">Latest Reviews by Customers</h3>
         <div ref={sliderRef} className="keen-slider py-8 frc oh mx-4 cursor-grab">
            {arrayHolder.map((_, index) => (
               <Comment key={index} index={index} />
            ))}
         </div>
         <ActionIcon onClick={prevSlide} className={`pos-a -l-8 t-50% ${hidePrev ? 'none' : ''}`}>
            <BsFillArrowRightSquareFill className="h-100% w-100% fill-green-dark -scale-x-100" />
         </ActionIcon>
         <ActionIcon onClick={nextSlide} className={`pos-a -r-8 t-50% ${hideNext ? 'none' : ''}`}>
            <BsFillArrowRightSquareFill className="h-100% w-100% fill-green-dark" />
         </ActionIcon>
      </div>
   )
}
export default Comments