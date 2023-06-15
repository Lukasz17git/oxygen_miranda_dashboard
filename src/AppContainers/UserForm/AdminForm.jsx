import Img from "../../AppComponents/Img"
import ReduxInput from "../../AppComponents/ReduxInput"
import ReduxSelect from "../../AppComponents/ReduxSelect"
import ReduxTextarea from "../../AppComponents/ReduxTextarea"
import Button from "../../AppComponents/Button"
import { useNavigate } from "react-router-dom"
import MediumLabel from "./Components/MediumLabel"
import { tw } from "tailwind-multi-class"
import { } from "../../Store/Slices/Users/adminSlice"
import { useDispatch } from "react-redux"
import useReduxForm from '../../Store/useReduxForm'



const AdminForm = () => {

   const path = useReduxForm('admin')

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const cancelHandler = () => {
      // dispatch(resetAdminFormAction())
      navigate('/')
      window.scrollTo(0, 0)
   }

   const saveHandler = () => {
      // dispatch(saveAdminThunk())
      navigate('/')
      window.scrollTo(0, 0)
   }

   const accountStateOptions = {
      active: 'Active',
      inactive: 'Inactive'
   }

   const p = {
      storePath
   }

   return (
      <div className={tw(
         "p-24px br-16px bg-bg-white-fff",
         "bg-gradient-to-t from-green-pastel/0 via-green-pastel/1 to-green-pastel/5"
      )}>
         <div className="w-fit m-a">
            <h2 className="m-a tc tf-app-semibold ts-24px pt-8px pb-24px">Account Management</h2>
            <div className="frc g-24px w-fit m-a">
               <div className="pos-r w-fit m-a p-8px br-50% s-card bc-border-silver-EBEBEB bw-1px">
                  <Img src="/CriticalImages/profile.svg" className="h-140px w-140px br-50%" />
               </div>
               <div className="w-170px fc g-16px">
                  <Button
                     text="Update Image"
                     className="bg-button-green-dark-135846 tc-text-white-fff"
                  />
                  <Button
                     text="Remove Image"
                     className="tc-text-red-E23428 bg-button-white-contrast-fcfcfc bc-border-red-E23428/70"
                  />
               </div>
            </div>
            <MediumLabel text="About you:" />
            <div className="fw g-16px">
               <ReduxInput {...path} fieldPath="name" required label="Name" />
               <ReduxInput path={path} fieldPath="lastname" required label="Lastname" />
               <ReduxInput label="Contact Phone" path={path} fieldPath="phone" />
            </div>
            <MediumLabel text="Credentials:" />
            <div className="fw g-16px">
               <ReduxInput label="Email" storePath="admin" fieldPath="email" />
               <ReduxInput label="Password" type="password" storePath="admin" fieldPath="password" />
            </div>
            <MediumLabel text="Powers and account state:" />
            <div className="fw g-16px">
               <ReduxSelect
                  label="Account State"
                  required
                  optionsMap={accountStateOptions}
                  disableLabelAsOption={true}
                  storePath="admin.state"
                  className="min-w-160px"
               />
            </div>
            <MediumLabel text="Description:" />
            <ReduxTextarea storePath="admin.description" />
            <div className="frca max-w-500px m-a mt-24px">
               <Button
                  onClick={cancelHandler}
                  text="Cancel"
                  className="bc-border-green-dark-135846/40 min-w-140px"
               />
               <Button
                  onClick={saveHandler}
                  text="Save"
                  className="bg-button-green-dark-135846 tc-text-white-fff min-w-140px"
               />
            </div>
         </div>
      </div>
   )
}
export default AdminForm