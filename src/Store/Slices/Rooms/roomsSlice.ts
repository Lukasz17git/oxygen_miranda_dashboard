import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../../Utils/customFetch.js";
import { bookingsUri, roomsUri } from "../../../Uris/uris.js";
import { BookingType, RoomType } from "./rooms.types.js";

const roomsSlice = createSlice({
   name: 'rooms',
   initialState: [] as RoomType[],
   reducers: {},
   extraReducers(builder) {
      builder.addCase(getRoomsThunk.fulfilled, (_, action) => action.payload)
      builder.addCase(createNewRoomThunk.fulfilled, (state, action) => {
         state.push(action.payload)
      })
      builder.addCase(updateRoomThunk.fulfilled, (state, action) => {
         const { _id, ...updates } = action.payload
         const index = state.findIndex(room => room._id === _id)
         if (index === -1) return state
         state[index] = { ...state[index], ...updates }
      })
      builder.addCase(deleteRoomThunk.fulfilled, (state, action) => {
         const index = state.findIndex(room => room._id === action.payload)
         if (index === -1) return state
         state.splice(index, 1)
      })
   },
})

export const getRoomsThunk = createAsyncThunk(
   'rooms/get',
   async (_, { dispatch }) => {
      const rooms = await customFetch<RoomType[]>(dispatch, roomsUri, {
         method: 'GET',
         credentials: "include",
      })
      console.log('rooms', rooms)
      return rooms
   }
)

export const createNewRoomThunk = createAsyncThunk(
   'rooms/post',
   async (roomData, { dispatch }) => {
      console.log('roomData', roomData)
      const newRoom = await customFetch<RoomType>(dispatch, roomsUri, {
         method: 'POST',
         credentials: "include",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(roomData)
      })
      console.log('newRoom', newRoom)
      return newRoom
   }
)

export const updateRoomThunk = createAsyncThunk(
   'rooms/put',
   async (updatesWithId: RoomType, { dispatch }) => {
      const { _id, ...updates } = updatesWithId
      await customFetch(dispatch, `${roomsUri}/${_id}`, {
         method: 'PUT',
         credentials: "include",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updates)
      })
      return updatesWithId
   }
)

export const deleteRoomThunk = createAsyncThunk(
   'rooms/delete',
   async (roomId: string, { dispatch }) => {
      await customFetch(dispatch, `${roomsUri}/${roomId}`, {
         method: 'DELETE',
         credentials: "include",
      })
      return roomId
   }
)

// need to add room ID here
export const createNewBookingThunk = createAsyncThunk(
   'bookings/post',
   async (bookingData, { dispatch }) => {
      const newBooking = await customFetch<BookingType>(dispatch, bookingsUri, {
         method: 'POST',
         credentials: "include",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(bookingData)
      })
      return newBooking
   }
)

export const updateBookingThunk = createAsyncThunk(
   'bookings/put',
   async (updatesWithId: BookingType, { dispatch }) => {
      const { _id, ...updates } = updatesWithId
      await customFetch(dispatch, `${bookingsUri}/${_id}`, {
         method: 'PUT',
         credentials: "include",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updates)
      })
      return updatesWithId
   }
)

export const deleteBookingThunk = createAsyncThunk(
   'bookings/delete',
   async (bookingId: string, { dispatch }) => {
      await customFetch(dispatch, `${bookingsUri}/${bookingId}`, {
         method: 'DELETE',
         credentials: "include",
      })
      return bookingId
   }
)

const roomsReducer = roomsSlice.reducer
export default roomsReducer