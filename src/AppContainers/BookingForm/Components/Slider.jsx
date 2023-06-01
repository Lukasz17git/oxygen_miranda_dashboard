import { useKeenSlider } from "keen-slider/react"
import ActionIcon from "../../../AppComponents/ActionIcon"
import { BsArrowLeftShort } from "react-icons/bs"
import Img from "../../../AppComponents/Img"


const statusStyle = {
   in: 'bg-green-light',
   out: 'bg-red-main',
   progress: 'bg-yellow-main'
}

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

   const random = Math.random()
   const status = random > 2 / 3 ? 'in' : random > 1 / 3 ? 'out' : 'progress'

   return (
      <div className="pos-r oh">
         <div ref={sliderRef} className="keen-slider h-100% frc cursor-grab">
            <Img className=" keen-slider__slide cover h-100%" src="/public/Images/hotel-6.jpg" />
            <Img className=" keen-slider__slide cover h-100%" src="/public/Images/hotel-7.jpg" />
            <Img className=" keen-slider__slide cover h-100%" src="/public/Images/hotel-8.jpg" />
         </div>
         <div className={`pos-a h-60 ${statusStyle[status]} tc-fff tupper t-48 r-48 translate-x-50% -translate-y-50% rotate-45 frcc tf-app-semibold w-100%`}>
            {status}
         </div>
         <div className="pos-a h-fit w-100% b-0 l-0 px-32 fc g-32 bg-gradient-to-t from-black/90 via-black/70 to-black/0">
            <div className="frcb">
               <ActionIcon onClick={prevSlide} className={`bg-fff/20 br-8 bc-fff/20`}>
                  <BsArrowLeftShort className="h-100% w-100% fill-fff" />
               </ActionIcon>
               <ActionIcon onClick={nextSlide} className={`bg-fff/20 br-8 bc-fff/20`}>
                  <BsArrowLeftShort className="h-100% w-100% fill-fff -scale-x-100" />
               </ActionIcon>
            </div>
            <div className="pb-40">
               <h2 className="tc-fff ts-24 tf-app-semibold mb-8">Bed Room</h2>
               <p className="ts-14 tc-text-silver">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
         </div>
      </div>
   )
}
export default Slider