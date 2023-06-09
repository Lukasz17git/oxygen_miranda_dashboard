import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wait from '../../Utils/wait.js'
import { getDataFromLocalStore, updateDataToLocalStore } from '../../Utils/localStore'
import { RootState } from "../store.js";
import { nanoid } from "nanoid";


type RoomType = {
   id: string,
   name: string,
   roomType: 'single' | 'double' | 'superior' | 'suite',
   roomNumber: number, //or string?
   price: number, // integer
   discount: number, //integer 0-100
   // status: 'available' | 'occupied', //no hace falta no?
   description: string,
   cancellationPolicy: string,

   amenities: AmenitiesType,
   images: string[],

   bookings: BookingType[]

}

type AmenitiesType = {
   airConditioner: boolean,
   wifi: boolean,
   breakfast: boolean,
   kitchen: boolean,
   cleaning: boolean,
   shower: boolean,
   grocery: boolean,
   singleBed: boolean,
   nearShop: boolean,
   towels: boolean,
   onlineSupport: boolean,
   strongLocker: boolean,
   smartSecurity: boolean,
   expertTeam: boolean
}

type GuestType = {
   // id: string, no hace falta no?
   name: string,
   lastname: string,
   profileUrl: string,
}

type GuestsType = GuestType[]

type BookingType = {
   id: string, // he movido el id del guest a aqui, tiene más sentido
   orderDate: number,
   inDate: number,
   outDate: number,
   // state: 'in' | 'out' | 'progress', //no hace falta no?
   specialRequest: string,
   guest: GuestType,
}
