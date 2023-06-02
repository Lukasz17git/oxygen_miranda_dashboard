import { nanoid } from "nanoid"
import { amenities } from "../AppComponentsShared/Amenity"

const roomTypes = ['single', 'double', 'superior', 'suite']

export const roomTypesText = {
   single: 'Single Bed',
   double: 'Double Bed',
   superior: 'D. Superior',
   suite: 'Suite'
}

const rooms = [
   {
      id: '1',
      photos: ['', '', ''],
      type: 'single',
      number: '1',
      description: 'A single modern room with a lot of amenities',
      offer: false,
      discount: 10,
      price: 12300,
      cancellationPolicy: 'This is the cancellation policy',
      amenities: amenities
   }, {
      id: '2',
      photos: ['', '', ''],
      type: 'superior',
      number: '2',
      description: 'A cozy room with a beautiful view',
      offer: false,
      discount: 20,
      price: 24500,
      cancellationPolicy: 'Cancellation is allowed up to 24 hours before check-in',
      amenities: amenities
   }, {
      id: '3',
      photos: ['', '', ''],
      type: 'superior',
      number: '3',
      description: 'A comfortable room with modern furnishings',
      offer: false,
      discount: 0,
      price: 33000,
      cancellationPolicy: 'Free cancellation within 48 hours',
      amenities: amenities
   }, {
      id: '4',
      photos: ['', '', ''],
      type: 'double',
      number: '4',
      description: 'A stylish room with a private balcony',
      offer: false,
      discount: 0,
      price: 42000,
      cancellationPolicy: 'Cancellation allowed with a 10% fee',
      amenities: amenities
   }, {
      id: '5',
      photos: ['', '', ''],
      type: 'suite',
      number: '5',
      description: 'A modern room with a spacious work area',
      offer: false,
      discount: 40,
      price: 50000,
      cancellationPolicy: 'Cancellation allowed within 72 hours',
      amenities: amenities
   }, {
      id: '6',
      photos: ['', '', ''],
      type: 'superior',
      number: '6',
      description: 'A cozy room with a king-sized bed',
      offer: false,
      discount: 10,
      price: 34500,
      cancellationPolicy: 'No cancellation allowed',
      amenities: amenities
   }, {
      id: '7',
      photos: ['', '', ''],
      type: 'single',
      number: '7',
      description: 'A comfortable room for a pleasant stay',
      offer: false,
      discount: 0,
      price: 45000,
      cancellationPolicy: 'Free cancellation within 24 hours',
      amenities: amenities
   }, {
      id: '8',
      photos: ['', '', ''],
      type: 'double',
      number: '8',
      description: 'A spacious room with modern amenities',
      offer: false,
      discount: 0,
      price: 16000,
      cancellationPolicy: 'Cancellation allowed with a 10% fee',
      amenities: amenities
   }, {
      id: '9',
      photos: ['', '', ''],
      type: 'superior',
      number: '9',
      description: 'An elegant room with a stunning view',
      offer: false,
      discount: 50,
      price: 37000,
      cancellationPolicy: 'Cancellation allowed within 48 hours',
      amenities: amenities
   }, {
      id: '10',
      photos: ['', '', ''],
      type: 'suite',
      number: '10',
      description: 'A luxurious suite with personalized service',
      offer: false,
      discount: 0,
      price: 680000,
      cancellationPolicy: 'No cancellation allowed',
      amenities: amenities
   }, {
      id: '11',
      photos: ['', '', ''],
      type: 'single',
      number: '11',
      description: 'A cozy room with all the essential amenities',
      offer: false,
      discount: 0,
      price: 55000,
      cancellationPolicy: 'Cancellation allowed within 72 hours',
      amenities: amenities
   },
]


rooms.forEach(room => {
   room.id = nanoid()
   room.status = Math.random() >= 0.5 ? 'available' : 'occupied'
   room.photos[0] = `/Images/hotel-${Math.floor(Math.random() * 8) + 1}.jpg`
   let amenities = {}
   for (const key of Object.keys(room.amenities)) {
      amenities[key] = (Math.random() >= 0.5)
   }
   room.amenities = amenities
})


export default rooms