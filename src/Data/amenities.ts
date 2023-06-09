import AirConditioner from '../Svgs/Amenities/AirConditioner'
import Breakfast from '../Svgs/Amenities/Breakfast'
import Cleaning from '../Svgs/Amenities/Cleaning'
import ExpertTeam from '../Svgs/Amenities/ExpertTeam'
import Grocery from '../Svgs/Amenities/Grocery'
import Kitchen from '../Svgs/Amenities/Kitchen'
import NearShop from '../Svgs/Amenities/NearShop'
import OnlineSupport from '../Svgs/Amenities/OnlineSupport'
import Shower from '../Svgs/Amenities/Shower'
import SingleBed from '../Svgs/Amenities/SingleBed'
import SmartSecurity from '../Svgs/Amenities/SmartSecurity'
import StrongLocker from '../Svgs/Amenities/StrongLocker'
import Towels from '../Svgs/Amenities/Towels'
import Wifi from '../Svgs/Amenities/Wifi'


export const amenities = {
   airConditioner: false,
   wifi: false,
   breakfast: false,
   kitchen: false,
   cleaning: false,
   shower: false,
   grocery: false,
   singleBed: false,
   nearShop: false,
   towels: false,
   onlineSupport: false,
   strongLocker: false,
   smartSecurity: false,
   expertTeam: false
}
export type TAmenities = typeof amenities
export type TAmenity = keyof TAmenities

// Preguntar
export const amenitiesList = Object.keys(amenities) as TAmenity[]

export const amenitiesIcons = {
   airConditioner: AirConditioner,
   wifi: Wifi,
   breakfast: Breakfast,
   kitchen: Kitchen,
   cleaning: Cleaning,
   shower: Shower,
   grocery: Grocery,
   singleBed: SingleBed,
   nearShop: NearShop,
   towels: Towels,
   onlineSupport: OnlineSupport,
   strongLocker: StrongLocker,
   smartSecurity: SmartSecurity,
   expertTeam: ExpertTeam
}


export const amenitiesText = {
   airConditioner: 'Air Conditioner',
   wifi: 'High speed WiFi',
   breakfast: 'Breakfast',
   kitchen: 'Kitchen',
   cleaning: 'Cleaning',
   shower: 'Shower',
   grocery: 'Grocery',
   singleBed: 'Single bed',
   nearShop: 'Shop near',
   towels: 'Towels',
   onlineSupport: 'Online Support',
   strongLocker: 'Strong Locker',
   smartSecurity: 'Smart Security',
   expertTeam: 'Expert Team'
}
