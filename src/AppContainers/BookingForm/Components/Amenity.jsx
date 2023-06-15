import { tw } from 'tailwind-multi-class'
import { amenitiesIcons, amenitiesText } from '../../../Data/amenities'


const Amenity = ({ amenity }) => {
   const Icon = amenitiesIcons[amenity]
   return (
      <div className={tw(
         "frcc g-8px br-12px py-12px px-16px bg-green-pastel tc-green-dark ",
         { dark: '' }
      )}>
         {Icon && <Icon className={`fill-green-dark`} />}
         <span className='ts-14px tf-app-semibold'>
            {amenitiesText[amenity]}
         </span>
      </div>
   )
}

export default Amenity