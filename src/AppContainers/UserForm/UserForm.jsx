import { useState } from "react"
import Img from "../../AppComponents/Img"
import Input from "../../AppComponents/Input"
import Select from "../../AppComponents/Select"
import Button from "../../AppComponents/Button"
import FormSection from "./Components/FormSection"
import { useNavigate } from "react-router-dom"
import MediumLabel from "./Components/MediumLabel"
import TextArea from "../../AppComponents/TextArea"


const UserForm = () => {

   const [data, setData] = useState({
      imageUrl: '',
      name: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      accountType: 'manager',
      accountState: 'inactive',
      startingDate: '',
      description: '',
   })

   const navigate = useNavigate()
   const cancelHandler = () => {
      navigate('/')
      window.scrollTo(0, 0)
   }

   const updateValue = (id) => (e) => setData({ ...data, [id]: e.target.value })

   const accountTypeOptions = {
      manager: 'Manager',
      receptionist: 'Receptionist',
      roomService: 'Rooms Service'
   }
   const accountStateOptions = {
      active: 'Active',
      inactive: 'Inactive'
   }

   return (
      <div className="p-24 br-16 bg-fff bg-gradient-to-t from-green-pastel/0 via-green-pastel/1 to-green-pastel/5">
         <div className="w-fit m-a">
            <h2 className="m-a tc tf-app-semibold ts-24 pt-8 pb-24">Account Management</h2>
            <div className="frc g-24 w-fit m-a">
               <div className="pos-r w-fit m-a p-8 br-50% s-card bc-color-separator bw-1">
                  <Img src="/CriticalImages/profile.svg" className="h-140 w-140 br-50%" />
               </div>
               <div className="w-170 fc g-16">
                  <Button text="Update Image" className="bg-green-dark tc-fff" />
                  <Button text="Remove Image" className="tc-red-main bc-red-main/70 bg-input-bg-white" />
               </div>
            </div>
            <MediumLabel text="About you:" />
            <div className="fw g-16">
               <Input required label="Name" value={data.name} onChange={updateValue('name')} />
               <Input required label="Lastname" value={data.lastname} onChange={updateValue('lastname')} />
               <Input label="Contact Phone" value={data.phone} onChange={updateValue('phone')} />
            </div>
            <MediumLabel text="Credentials:" />
            <div className="fw g-16">
               <Input label="Email" value={data.email} onChange={updateValue('email')} />
               <Input label="Password" type="password" value={data.password} onChange={updateValue('password')} />
            </div>
            <MediumLabel text="Powers and account state:" />
            <div className="fw g-16">
               <Select
                  label="Account Type"
                  required
                  optionsMap={accountTypeOptions}
                  disableLabelAsOption={true}
                  value={data.accountType}
                  onChange={updateValue('accountType')}
                  className="min-w-160"
               />
               <Select
                  label="Account State"
                  required
                  optionsMap={accountStateOptions}
                  disableLabelAsOption={true}
                  value={data.accountState}
                  onChange={updateValue('accountState')}
                  className="min-w-160"
               />
               <Input
                  label="Discharge date"
                  type="date"
                  value={data.startingDate}
                  onChange={updateValue('startingDate')}
               />
            </div>
            <MediumLabel text="Description:" />
            <TextArea value={data.description} onChange={updateValue('description')} />
            <div className="frca max-w-500 m-a mt-24">
               <Button onClick={cancelHandler} text="Cancel" className="bc-green-dark/40 min-w-140" />
               <Button text="Save" className="bg-green-dark tc-fff min-w-140" />
            </div>
         </div>
      </div>
   )
}
export default UserForm