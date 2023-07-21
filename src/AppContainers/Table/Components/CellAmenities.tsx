import { amenitiesIcons } from "../../../Data/amenities"
import { RoomType } from "../../../Store/Slices/Rooms/rooms.types"

type TAmenitiesKeys = keyof RoomType['amenities']

const AmenityIcon = ({ amenity }: { amenity: keyof RoomType['amenities'] }) => {
   const Icon = amenitiesIcons[amenity]
   return (
      <div className="bg-icon-green-pastel-EEF9F2/40 br-4px p-4px">
         <Icon className={`fill-green-dark`} />
      </div>)
}

const CellAmenities = ({ amenities }: { amenities: RoomType['amenities'] }) => {
   const validAmenities = Object.keys(amenities).filter(v => amenities[v as TAmenitiesKeys]) as TAmenitiesKeys[]
   return (
      <div className="w-100% fw px-16px g-4px py-4px col-span-2">
         {validAmenities.map(amenity => (
            <AmenityIcon key={amenity} amenity={amenity} />
         ))}
      </div>
   )
}
export default CellAmenities