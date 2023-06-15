
import Img from "../../AppComponents/Img"
import ReduxInput from "../../AppComponents/ReduxInput"
import ReduxSelect from "../../AppComponents/ReduxSelect"
import ReduxTextarea from "../../AppComponents/ReduxTextarea"
import Button from "../../AppComponents/Button"
import { useNavigate, useParams } from "react-router-dom"
import MediumLabel from "./Components/MediumLabel"
import { tw } from "tailwind-multi-class"
import { useTypedSelector } from "../../Store/store"
// import { updateEmployeeFieldAction, resetEmployeeAction, resetNewEmployeeAction, saveEmployeeThunk, createNewEmployeeThunk } from '../../Store/Slices/employeesSlice'
import { useDispatch } from "react-redux"
import { useEffect } from "react"


const EmployeeForm = () => {

   const route = '/users'
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { id } = useParams()
   const isNewForm = id === undefined
   const index = useTypedSelector(state => !isNewForm && state.employees.list.findIndex(employee => employee.id === id))
   const notFoundId = index === -1

   useEffect(() => {
      console.log('rendered effect')
      if (notFoundId) navigate(route)
   }, [notFoundId, navigate])

   const storePath = isNewForm ? 'employees.newForm' : `employees.list.${index}`

   const cancelHandler = () => {
      // dispatch(isNewForm ? resetNewEmployeeAction() : resetEmployeeAction())
      navigate(route)
      window.scrollTo(0, 0)
   }

   const saveHandler = () => {
      // dispatch(isNewForm ? createNewEmployeeThunk() : saveEmployeeThunk())
      navigate(route)
      window.scrollTo(0, 0)
   }

   const jobTypeOptions = {
      receptionist: 'Receptionist',
      rooms_service: 'Rooms Service'
   }

   const accountStateOptions = {
      active: 'Active',
      inactive: 'Inactive'
   }

   return !notFoundId && (
      <div className={tw(
         "p-24px br-16px bg-bg-white-fff",
         "bg-gradient-to-t from-green-pastel/0 via-green-pastel/1 to-green-pastel/5"
      )}>
         <div className="w-fit m-a">
            <h2 className="m-a tc tf-app-semibold ts-24px pt-8px pb-24px">Employee Management</h2>
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
            <MediumLabel text="Employee data:" />
            <div className="fw g-16px">
               {/* <ReduxInput required label="Name" storePath={`${storePath}.name`} dispatchAction={updateEmployeeFieldAction} />
               <ReduxInput required label="Lastname" storePath={`${storePath}.lastname`} dispatchAction={updateEmployeeFieldAction} />
               <ReduxInput label="Contact Phone" storePath={`${storePath}.phone`} dispatchAction={updateEmployeeFieldAction} /> */}
            </div>
            <MediumLabel text="Credentials:" />
            <div className="fw g-16px">
               {/* <ReduxInput label="Email" storePath={`${storePath}.email`} dispatchAction={updateEmployeeFieldAction} /> */}
            </div>
            <MediumLabel text="Powers and account state:" />
            <div className="fw g-16px">
               <ReduxSelect
                  label="Job"
                  required
                  optionsMap={jobTypeOptions}
                  disableLabelAsOption={true}
                  storePath={`${storePath}.job`}
                  // dispatchAction={updateEmployeeFieldAction}
                  className="min-w-160px"
               />
               <ReduxSelect
                  label="Account State"
                  required
                  optionsMap={accountStateOptions}
                  disableLabelAsOption={true}
                  storePath={`${storePath}.state`}
                  // dispatchAction={updateEmployeeFieldAction}
                  className="min-w-160px"
               />
               <ReduxInput
                  label="Discharge date"
                  type="date"
                  storePath={`${storePath}.dischargeDate`}
                  // dispatchAction={updateEmployeeFieldAction}
               />
            </div>
            <MediumLabel text="Description:" />
            {/* <ReduxTextarea storePath={`${storePath}.description`} dispatchAction={updateEmployeeFieldAction} /> */}
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
export default EmployeeForm