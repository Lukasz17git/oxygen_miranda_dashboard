
import { useKeenSlider } from "keen-slider/react"
import ActionIcon from "../../../AppComponents/ActionIcon"
import { BsArrowLeftShort } from "react-icons/bs"
import Img from "../../../AppComponents/Img"


const Slider = () => {
   const [sliderRef, instanceRef] = useKeenSlider({
      mode: "snap",
      loop: true,
      slides: {
         perView: 'auto',// Math.trunc(window.innerWidth / 320 - 1),
         spacing: 0
      },
      defaultAnimation: {
         duration: 1000
      }
   })
   const nextSlide = () => instanceRef.current?.next()
   const prevSlide = () => instanceRef.current?.prev()

   return (
      <div className="pos-r oh">
         <div ref={sliderRef} className="keen-slider h-100% frc cursor-grab">
            <Img className=" keen-slider__slide cover h-100%" src="/public/Images/hotel-6.jpg" />
            <Img className=" keen-slider__slide cover h-100%" src="/public/Images/hotel-7.jpg" />
            <Img className=" keen-slider__slide cover h-100%" src="/public/Images/hotel-8.jpg" />
         </div>
         <div className="pos-a h-50% w-100% b-0 l-0 px-32 fc g-32 bg-gradient-to-t from-black/90 via-black/70 to-black/0">
            <div className="frcb">
               <ActionIcon onClick={prevSlide} className={`bg-fff/20 br-8 bc-fff/20`}>
                  <BsArrowLeftShort className="h-100% w-100% fill-fff" />
               </ActionIcon>
               <ActionIcon onClick={nextSlide} className={`bg-fff/20 br-8 bc-fff/20`}>
                  <BsArrowLeftShort className="h-100% w-100% fill-fff -scale-x-100" />
               </ActionIcon>
            </div>
         </div>
      </div>
   )
}
export default Slider