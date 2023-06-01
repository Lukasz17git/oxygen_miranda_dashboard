import Img from "../../AppComponents/Img"
import MiniLabel from "./Components/MiniLabel"
import { amenities } from "../../AppComponentsShared/Amenity"
import Amenity from "../../AppComponentsShared/Amenity"
import Slider from "./Components/Slider"
import { getFullDate, getDayMonthYear } from "../../Utils/formatDate"


const BookingForm = () => {
   const name = 'Roberto Mansini'

   const availableAmenities = Object.keys(amenities).filter(() => Math.random() >= 0.5)
   const checkIn = Date.now() - 144555444
   const checkOut = Date.now() + 333444

   return (
      <div className="oh br-16 grid grid-cols-2 bg-fff">
         <div className="p-24">
            <div className="fr g-16">
               <Img src="/public/Images/profile.jpg" className="h-120 max-w-200 br-8" />
               <div className="pos-r ">
                  <h2 className="tf-app-semibold ts-30">{name}</h2>
                  <q className="ts-14 tc-green-text">ID 123123132</q>
               </div>
            </div>
            <div className="grid grid-cols-2 g-16 py-16 bbc-color-separator">
               <div>
                  <MiniLabel text='Check In' />
                  <p className="tf-app-semibold tc-text-dark ts-15">{getFullDate(checkIn)}</p>
               </div>
               <div>
                  <MiniLabel text='Check Out' />
                  <p className="tf-app-semibold tc-text-dark ts-15">{getDayMonthYear(checkOut)}</p>
               </div>
            </div>
            <div className="grid grid-cols-2 g-16 py-16">
               <div>
                  <MiniLabel text='Room Info' />
                  <p className="ts-24 tf-app-semibold tc-text-dark">Double Z</p>
               </div>
               <div>
                  <MiniLabel text='Price' />
                  <b className="ts-24 tf-app-semibold tc-text-dark after:content-['/night'] after:tf-app-light after:ts-14 after:tc-text-silver after:pl-8">$145</b>
               </div>
            </div>
            <p className="tc-text-grey-darker ts-14 max-h-140 oya">
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="py-16">
               <MiniLabel text='Amenities' />
               <div className="fw g-8">
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