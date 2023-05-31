import Img from "../../AppComponents/Img"


const BookingForm = () => {
   const name = 'Roberto Mansini'
   return (
      <div className="br-16 grid grid-cols-2 bg-fff">
         <div className="p-16">
            <div className="fr g-16">
               <Img
                  src="/public/Images/hotel-6.jpg"
                  className="max-h-160 max-w-160 br-8"
               />
               <div className="pos-r">
                  <h2 className="tf-app-semibold ts-30">{name}</h2>
                  <q className="ts-14 tc-green-text">ID 123123132</q>
               </div>
            </div>
            <div className="grid grid-cols-2 g-16 py-16 bbc-color-separator">
               <div>
                  <q>Check In</q>
                  <p>Some Random date i ll add later</p>
               </div>
               <div>
                  <q>Check Out</q>
                  <p>Some Random date i ll add later</p>
               </div>
            </div>

         </div>
         <div>

         </div>
      </div>
   )
}
export default BookingForm