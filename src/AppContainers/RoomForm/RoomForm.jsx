import Amenities from "./Components/Amenities"
import { useState } from "react"
import rooms from "../../JsonData/rooms"
import MediumLabel from "./Components/MediumLabel"
import Grid from "./Components/Grid"
import Button from "../../AppComponents/Button"
import Separator from "./Components/Separator"
import FormInput from "./Components/FormInput"
import TextArea from "../../AppComponents/TextArea"
import { MdOutlineUploadFile } from 'react-icons/md'
import Slider from "./Components/Slider"


const RoomForm = () => {

   const [room, setRoom] = useState(rooms[0])

   const toggleAmenity = (amenityId) => setRoom(
      {
         ...room,
         amenities: {
            ...room.amenities,
            [amenityId]: !room.amenities[amenityId]
         }
      }
   )

   const setValue = (key) => (e) => setRoom({ ...room, [key]: e.target.value })

   return (
      <div className="oh br-16 grid grid-cols-2 bg-fff">
         <div className="p-24">
            <div className="frcb">
               <div>
                  <h2 className="tf-app-semibold ts-30">Room</h2>
                  <q className="ts-14 tc-green-text">ID 123123132</q>
               </div>
               <Button text="Upload Photo" >
                  <MdOutlineUploadFile className="-mr-4 ml-4 scale-95" />
               </Button >
            </div>
            <Separator />
            <MediumLabel text='Room type and number' />
            <Grid>
               <FormInput label="Price" value={room.price} onChange={setValue('price')} />
               <FormInput label="Number" value={room.number} onChange={setValue('number')} />
            </Grid>
            <MediumLabel text='Price and discount if any' />
            <Grid>
               <FormInput label="Price" value={room.price} onChange={setValue('price')} />
               <FormInput label="Price" value={room.discount} onChange={setValue('discount')} />
            </Grid>
            <MediumLabel text='Room description' />
            <TextArea value={room.description} onChange={setValue('description')} />
            <MediumLabel text='Cancellation policy' />
            <TextArea value={room.cancellationPolicy} onChange={setValue('cancellationPolicy')} />
            <MediumLabel text='Amenities' />
            <Amenities amenities={room.amenities} toggleAmenity={toggleAmenity} />
            <div className="frce pt-24">
               <Button text="Cancel" />
               <Button text="Save" />
            </div>
         </div>
         <Slider />
      </div >
   )
}
export default RoomForm