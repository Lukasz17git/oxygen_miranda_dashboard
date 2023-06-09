import { useNavigate } from 'react-router-dom'
import Button from '../../../AppComponents/Button'
import Image from '../../../AppComponents/Img'
import { useTypedSelector } from '../../../Store/store'

const Profile = () => {
   const name = useTypedSelector(state => state.admin.name)
   const lastname = useTypedSelector(state => state.admin.lastname)
   const email = useTypedSelector(state => state.admin.email)
   const fullname = `${name}${lastname ? ' ' + lastname : ''}`

   const navigate = useNavigate()
   const openSettings = () => navigate('/settings')

   return (
      <div className="pos-r p-24px s-profile br-16px max-w-240px fccc g-8px pt-64px mt-64px">
         <Image
            src="/CriticalImages/profile.svg"
            className="pos-a br-16px max-w-100px max-h-100px t-0 -translate-y-50%" />
         <strong className='tc-text-dark-393939 tf-app-semibold'>{fullname}</strong>
         <p className='ts-12px tc-text-silver-B2B2B2'>{email}</p>
         <Button
            role='navigation'
            onClick={openSettings}
            text='Settings'
            className='h:bg-button-green-dark-135846 h:tc-text-green-pastel-EEF9F2'
         />
      </div>
   )
}
export default Profile