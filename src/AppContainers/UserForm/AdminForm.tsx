import Img from "../../AppComponents/Img"
import ReduxInput from "../../AppComponents/ReduxInput"
import ReduxSelect from "../../AppComponents/ReduxSelect"
import ReduxTextarea from "../../AppComponents/ReduxTextarea"
import Button from "../../AppComponents/Button"
import { useNavigate } from "react-router-dom"
import MediumLabel from "./Components/MediumLabel"
import { tw } from "tailwind-multi-class"
import { saveAdminThunk } from "../../Store/Slices/Users/adminSlice"
import useReduxForm from '../../Store/useReduxForm'
import { useCallback } from "react"

const redirectRoute = '/'

const AdminForm = () => {

   const navigate = useNavigate()
   const redirect = useCallback(() => {
      navigate(redirectRoute)
      window.scrollTo(0, 0)
   }, [navigate])

   const { path, saveForm } = useReduxForm('admin', saveAdminThunk)

   const cancelHandler = () => redirect()

   const saveHandler = async () => {
      await saveForm()
      redirect()
   }

   const accountStateOptions = {
      active: 'Active',
      inactive: 'Inactive'
   }

   return (
      <div className={tw(
         "p-24. br-16. bg-bg-white-fff",
         "bg-gradient-to-t from-green-pastel/0 via-green-pastel/1 to-green-pastel/5"
      )}>
         <div className="w-fit m-a">
            <h2 className="m-a tc tf-app-semibold ts-24. pt-8. pb-24.">Account Management</h2>
            <div className="frc g-24. w-fit m-a">
               <div className="pos-r w-fit m-a p-8. br-50% s-card bc-border-silver-EBEBEB bw-1.">
                  <Img src="/CriticalImages/profile.svg" className="h-140. w-140. br-50%" />
               </div>
               <div className="w-170. fc g-16.">
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
            <div className="fw g-16.">
               <ReduxInput path={path} fieldPath="name" required label="Name" />
               <ReduxInput path={path} fieldPath="lastname" required label="Lastname" />
               <ReduxInput path={path} fieldPath="phone" label="Contact Phone" />
            </div>
            <MediumLabel text="Credentials:" />
            <div className="fw g-16.">
               <ReduxInput path={path} fieldPath="email" label="Email" />
               <ReduxInput path={path} fieldPath="password" label="Password" type="password" />
            </div>
            <MediumLabel text="Powers and account state:" />
            <div className="fw g-16.">
               <ReduxSelect
                  path={path}
                  label="Account State"
                  required
                  optionsMap={accountStateOptions}
                  disableLabelAsOption={true}
                  fieldPath="status"
                  className="min-w-160."
               />
            </div>
            <MediumLabel text="Description:" />
            <ReduxTextarea path={path} fieldPath="description" />
            <div className="frca max-w-500. m-a mt-24.">
               <Button
                  onClick={cancelHandler}
                  text="Cancel"
                  className="bc-border-green-dark-135846/40 min-w-140."
               />
               <Button
                  onClick={saveHandler}
                  text="Save"
                  className="bg-button-green-dark-135846 tc-text-white-fff min-w-140."
               />
            </div>
         </div>
      </div>
   )
}
export default AdminForm