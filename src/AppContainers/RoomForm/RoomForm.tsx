import Amenities from "./Components/Amenities"
import { useCallback, useEffect } from "react"
import MediumLabel from "./Components/MediumLabel"
import Grid from "./Components/Grid"
import Button from "../../AppComponents/Button"
import Separator from "./Components/Separator"
import { MdOutlineUploadFile } from 'react-icons/md'
import Slider from "./Components/Slider"
import { useNavigate, useParams } from "react-router-dom"
import { useTypedSelector } from "../../Store/store"
import useReduxForm from "../../Store/useReduxForm"
import ReduxInput from "../../AppComponents/ReduxInput"
import ReduxSelect from "../../AppComponents/ReduxSelect"
import ReduxTextarea from "../../AppComponents/ReduxTextarea"
import { RoomsTypes } from "../../Store/Slices/Rooms/rooms.types"
import { createNewRoomThunk, updateRoomThunk } from "../../Store/Slices/Rooms/roomsSlice"
import { initialRoomState } from "../../Store/Slices/Rooms/rooms.data"
import RoomId from "./Components/RoomId"

const redirectRoute = '/rooms'

const RoomForm = () => {

   const navigate = useNavigate()
   const redirect = useCallback(() => {
      navigate(redirectRoute)
      window.scrollTo(0, 0)
   }, [navigate])

   const { id } = useParams()
   console.log('id', id)
   const isNewForm = id === 'new'
   console.log('isNewForm', isNewForm)
   const index = useTypedSelector(state => !isNewForm && state.rooms.findIndex(room => room._id === id))
   const notFoundId = index === -1

   useEffect(() => {
      if (notFoundId) redirect()
   }, [notFoundId, redirect])

   console.log('initialRoomState', initialRoomState)
   const { path, saveForm } = useReduxForm(`rooms.${index as number}`, isNewForm ? createNewRoomThunk : updateRoomThunk, isNewForm ? initialRoomState : undefined)
   console.log('path', path)
   const cancelHandler = () => redirect()

   const saveHandler = async () => {
      await saveForm()
      redirect()
   }

   const roomTypesOptions: Record<RoomsTypes, string> = {
      single: 'Single',
      double: 'Double',
      suite: 'Suite',
      superior: 'Superior'
   }

   return (
      <div className="oh br-16. grid grid-cols-2 bg-bg-white-fff">
         <div className="p-24.">
            <div className="frcb">
               <div>
                  <h2 className="tf-app-semibold ts-30.">Room</h2>
                  <RoomId />
               </div>
               <Button text="Upload Photo" >
                  <MdOutlineUploadFile className="-mr-4. ml-4. scale-95" />
               </Button >
            </div>
            <Separator />
            <MediumLabel text='Room name, type and number' />
            <Grid>
               <ReduxInput path={path} fieldPath="name" label="Name" />
               <ReduxSelect
                  path={path}
                  fieldPath="type"
                  label="Room Type"
                  required
                  disableLabelAsOption={true}
                  optionsMap={roomTypesOptions}
               />
               <ReduxInput path={path} fieldPath="number" label="Number" />
            </Grid>
            <MediumLabel text='Price and discount if any' />
            <Grid>
               <ReduxInput path={path} fieldPath="price" label="Price" />
               <ReduxInput path={path} fieldPath="discount" label="Discount" />
            </Grid>
            <MediumLabel text='Room description' />
            <ReduxTextarea path={path} fieldPath="description" />
            <MediumLabel text='Cancellation policy' />
            <ReduxTextarea path={path} fieldPath="cancellationPolicy" />
            <MediumLabel text='Amenities' />
            <Amenities path={path} />
            <div className="frce pt-24.">
               <Button text="Cancel" onClick={cancelHandler} />
               <Button text="Save" onClick={saveHandler} />
            </div>
         </div>
         <Slider />
      </div >
   )
}
export default RoomForm