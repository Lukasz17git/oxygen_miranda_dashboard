import { amenitiesIcons } from "../../../AppComponentsShared/Amenity"

const AmenityIcon = ({ amenity }) => {
   const Icon = amenitiesIcons[amenity]
   return (
      <div className="bg-green-pastel/40 br-4 p-4">
         <Icon className={`fill-green-dark`} />
      </div>)
}

const CellAmenities = ({ amenities }) => {
   const validAmenities = Object.keys(amenities).filter(v => amenities[v])
   return (
      <div className="w-100% fw px-16 g-4 py-4 col-span-2">
         {validAmenities.map(amenity => (
            <AmenityIcon key={amenity} amenity={amenity} />
         ))}
      </div>
   )
}
export default CellAmenities