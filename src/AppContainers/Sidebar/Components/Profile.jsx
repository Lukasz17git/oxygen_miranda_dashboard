import Button from '../../../AppComponents/Button'
import Image from '../../../AppComponents/Img'
import { setSettingsModalAction } from '../../../Store/Slices/modalSlice'
import { useTypedDispatch, useTypedSelector } from '../../../Store/store'

const Profile = () => {
   const name = useTypedSelector(state => state.admin.name)
   const lastname = useTypedSelector(state => state.admin.lastname)
   const email = useTypedSelector(state => state.admin.email)
   const fullname = `${name}${lastname ? ' ' + lastname : ''}`

   const dispatch = useTypedDispatch()
   const openSettings = () => dispatch(setSettingsModalAction())

   return (
      <div className="pos-r p-24 s-profile br-16 max-w-240 fccc g-8 pt-64 mt-64">
         <Image
            src="/CriticalImages/profile.svg"
            className="pos-a br-16 max-w-100 max-h-100 t-0 -translate-y-50%" />
         <strong className='tc-text-dark tf-app-semibold'>{fullname}</strong>
         <p className='ts-12 tc-text-silver'>{email}</p>
         <Button onClick={openSettings} text='Settings' className='h:bg-green-dark h:tc-green-pastel' />
      </div>
   )
}
export default Profile