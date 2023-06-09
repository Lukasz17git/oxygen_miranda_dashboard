import { tw } from "tailwind-multi-class"
import ActionIcon from "../../../AppComponents/ActionIcon"
import { amenitiesIcons, amenitiesList } from "../../../Data/amenities"

// TODO ME HE QUEDADO AQUI REFACTORIZANDO

const AmenityIcon = ({ amenity, active, toggleAmenity }) => {
   const Icon = amenitiesIcons[amenity]

   return (
      <ActionIcon
         onClick={() => toggleAmenity(amenity)}
         className={tw(
            "br-4px p-4px",
            active ? 'bc-green-dark/50 bw-1px bg-green-light h:bg-green-light' : ' bg-green-pastel h:bg-green-pastel'
         )}
      >
         <Icon className={'fill-green-dark'} />
      </ActionIcon>)
}

const Amenities = ({ amenities, toggleAmenity }) => {
   return (
      <div className="w-100% fw g-4px col-span-2">
         {amenitiesList.map(amenity => (
            <AmenityIcon key={amenity} amenity={amenity} active={amenities[amenity]} toggleAmenity={toggleAmenity} />
         ))}
      </div>
   )
}
export default Amenities