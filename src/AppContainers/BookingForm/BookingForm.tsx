import Img from "../../AppComponents/Img"
import MiniLabel from "./Components/MiniLabel"
import Slider from "./Components/Slider"
import { getFullDate, getDayMonthYear } from "../../Utils/formatDate"
import { tw } from "tailwind-multi-class"
import { TAmenity, amenitiesList } from "../../Data/amenities"
import Amenity from "./Components/Amenity"


const BookingForm = () => {
   const name = 'Roberto Mansini'

   const availableAmenities: TAmenity[] = amenitiesList.filter(() => Math.random() >= 0.5)
   const checkIn = Date.now() - 144555444
   const checkOut = Date.now() + 333444

   return (
      <div className="oh br-16px grid grid-cols-2 bg-bg-white-fff">
         <div className="p-24px">
            <div className="fr g-16px">
               <Img src="/Images/profile.jpg" className="h-120px max-w-200px br-8px" />
               <div className="pos-r ">
                  <h2 className="tf-app-semibold ts-30px">{name}</h2>
                  <q className="ts-14px tc-green-text">ID 123123132</q>
               </div>
            </div>
            <div className="grid grid-cols-2 g-16px py-16px bbc-color-separator">
               <div>
                  <MiniLabel text='Check In' />
                  <p className="tf-app-semibold tc-text-dark ts-15px">{getFullDate(checkIn)}</p>
               </div>
               <div>
                  <MiniLabel text='Check Out' />
                  <p className="tf-app-semibold tc-text-dark ts-15px">{getDayMonthYear(checkOut)}</p>
               </div>
            </div>
            <div className="grid grid-cols-2 g-16px py-16px">
               <div>
                  <MiniLabel text='Room Info' />
                  <p className="ts-24px tf-app-semibold tc-text-dark">Double Z</p>
               </div>
               <div>
                  <MiniLabel text='Price' />
                  <b className={tw(
                     "ts-24px tf-app-semibold tc-text-dark",
                     { after: "content-['/night'] tf-app-light ts-14px tc-text-silver pl-8px" }
                  )}>$145</b>
               </div>
            </div>
            <p className="tc-text-grey-darker ts-14px max-h-140px oya">
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="py-16px">
               <MiniLabel text='Amenities' />
               <div className="fw g-8px">
                  {availableAmenities.map(amenity => (
                     <Amenity amenity={amenity} key={amenity} />
                  ))}
               </div>
            </div>
         </div>
         <Slider />
      </div>
   )
}
export default BookingForm