import { WithoutId } from "../../../Types/mongo";
import { RoomType } from "./rooms.types";

export const initialRoomState: WithoutId<RoomType> = {
   name: '',
   number: '',
   price: 0,
   discount: 0,
   bookings: [],
   description: '',
   cancellationPolicy: '',
   type: 'single',
   images: [],
   amenities: {
      airConditioner: false,
      breakfast: false,
      cleaning: false,
      expertTeam: false,
      grocery: false,
      kitchen: false,
      nearShop: false,
      onlineSupport: false,
      shower: false,
      singleBed: false,
      smartSecurity: false,
      strongLocker: false,
      towels: false,
      wifi: false
   }
}