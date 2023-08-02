import { tw } from 'tailwind-multi-class'
import { TAmenity, amenitiesIcons, amenitiesText } from '../../../Data/amenities'


const Amenity = ({ amenity }: { amenity: TAmenity }) => {
   const Icon = amenitiesIcons[amenity]
   return (
      <div className={tw(
         "frcc g-8. br-12. py-12. px-16. bg-green-pastel tc-green-dark ",
         { dark: '' }
      )}>
         {Icon && <Icon className={`fill-green-dark`} />}
         <span className='ts-14. tf-app-semibold'>
            {amenitiesText[amenity]}
         </span>
      </div>
   )
}

export default Amenity