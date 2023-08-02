
// export type RoomStatusType = 'available' | 'occupied'

export type BookingStatusType = 'in' | 'out' | 'progress'

export type BookingType = {
   _id: string,
   roomId: string,
   orderDate: string,
   inDate: string,
   outDate: string,
   specialRequest: string,
   guest: {
      name: string,
      lastname: string,
      profileUrl: string,
   }
}

export type BookingWithRoomInfoType = BookingType & {
   roomType: RoomsTypes,
   status: BookingStatusType
}

export type RoomStatus = 'in' | 'out' | 'occupied'

export type RoomsTypes = 'single' | 'double' | 'superior' | 'suite'

export type RoomType = {
   _id: string,
   name: string,
   type: RoomsTypes,
   number: string,
   price: number,
   discount: number,
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