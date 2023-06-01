import { useState } from "react"
import Img from "../../AppComponents/Img"
import Input from "../../AppComponents/Input"
import Select from "../../AppComponents/Select"
import MiniLabel from "../BookingForm/Components/MiniLabel"
import Button from "../../AppComponents/Button"


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
      <div className="p-24 br-16 bg-fff">
         {/* <h2 className="m-a tc tf-app-semibold ts-24 pb-16">Profile Management</h2> */}
         <div className="pos-r w-fit m-a">
            <Img src="/public/Images/profile.jpg" className="h-140 w-140 br-8" />
            <input type="file" />
         </div>
         <MiniLabel text='Check In' />
         <div className="fw g-16">
            <Input required label="Name" value={data.name} onChange={updateValue('name')} />
            <Input required label="Lastname" value={data.lastname} onChange={updateValue('lastname')} />
            <Input label="Contact Phone" value={data.phone} onChange={updateValue('phone')} />
         </div>
         <div className="fw g-16">
            <Input label="Email" value={data.email} onChange={updateValue('email')} />
            <Input label="Password" type="password" value={data.password} onChange={updateValue('password')} />
         </div>
         <MiniLabel text='Check In' />
         <div className="fw">
            <Select
               label="Account Type"
               required
               optionsMap={accountTypeOptions}
               disableLabelAsOption={true}
               value={data.accountType}
               onChange={updateValue('accountType')}
            />
            <Select
               label="Account State"
               required
               optionsMap={accountStateOptions}
               disableLabelAsOption={true}
               value={data.accountState}
               onChange={updateValue('accountState')}
            />
            <Input
               label="Discharge date"
               type="date"
               value={data.startingDate}
               onChange={updateValue('startingDate')}
            />
         </div>
         <textarea></textarea>
         <div className="frca max-w-500 m-a">
            <Button text="Cancel" className="bc-green-dark/40 min-w-140" />
            <Button text="Save" className="bg-green-dark tc-fff min-w-140" />
         </div>
      </div>
   )
}
export default UserForm