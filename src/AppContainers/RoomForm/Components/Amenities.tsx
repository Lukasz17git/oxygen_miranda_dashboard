import { tw } from "tailwind-multi-class"
import ActionIcon from "../../../AppComponents/ActionIcon"
import { TAmenity, amenitiesIcons, amenitiesList } from "../../../Data/amenities"
import { NestedStorePaths, StorePaths, selector, useTypedDispatch, useTypedSelector } from "../../../Store/store"
import { updateFormValueAction } from "../../../Store/RootSlices/formSlice"

// TODO ME HE QUEDADO AQUI REFACTORIZANDO

const AmenityIcon = ({ amenity, path }: { amenity: TAmenity, path: StorePaths }) => {

   const Icon = amenitiesIcons[amenity]
   const fieldPath: NestedStorePaths<`rooms.${number}`> = `amenities.${amenity}`

   const active = useTypedSelector(state => {
      const valueInsideForm = selector(`form.${fieldPath}` as StorePaths)(state)
      const originalValue = selector(`${path}.${fieldPath}` as StorePaths)(state)
      if (valueInsideForm !== undefined) return valueInsideForm
      return originalValue ?? false
   }) as boolean

   const dispatch = useTypedDispatch()
   const toggleValue = () => dispatch(updateFormValueAction({ stringPath: fieldPath, value: !active }))

   return (
      <ActionIcon
         onClick={toggleValue}
         className={tw(
            "br-4px p-4px",
            active ? 'bc-green-dark/50 bw-1px bg-green-light h:bg-green-light' : ' bg-green-pastel h:bg-green-pastel'
         )}
      >
         <Icon className={'fill-green-dark'} />
      </ActionIcon>)
}

const Amenities = ({ path }: { path: StorePaths }) => {

   return (
      <div className="w-100% fw g-4px col-span-2">
         {amenitiesList.map(amenity => (
            <AmenityIcon key={amenity} amenity={amenity} path={path} />
         ))}
      </div>
   )
}
export default Amenities