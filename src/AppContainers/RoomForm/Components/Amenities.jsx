import ActionIcon from "../../../AppComponents/ActionIcon"
import { amenitiesIcons, amenitiesList } from "../../../AppComponentsShared/Amenity"

const AmenityIcon = ({ amenity, active, toggleAmenity }) => {
   const Icon = amenitiesIcons[amenity]
   console.log('active', active)
   return (
      <ActionIcon
         onClick={() => toggleAmenity(amenity)}
         className={`br-4 p-4 ${active ? 'bc-green-dark/50 bw-1 bg-green-light h:bg-green-light' : ' bg-green-pastel h:bg-green-pastel'}`}
      >
         <Icon className={'fill-green-dark'} />
      </ActionIcon>)
}

const Amenities = ({ amenities, toggleAmenity }) => {
   return (
      <div className="w-100% fw g-4 col-span-2">
         {amenitiesList.map(amenity => (
            <AmenityIcon key={amenity} amenity={amenity} active={amenities[amenity]} toggleAmenity={toggleAmenity} />
         ))}
      </div>
   )
}
export default Amenities