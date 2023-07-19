import { WithoutId } from "../../../Types/mongo"
import { UserType } from "./users.types"

export const initialAdminState: UserType = {
   _id: '',
   name: '',
   lastname: '',
   email: '',
   password: '',
   phone: '',
   description: '',
   status: 'active',
   job: 'manager',
   profileImg: '',
   dischargeDate: ''
}

export const initialEmployeeState: WithoutId<UserType> = {
   name: '',
   lastname: '',
   email: '',
   phone: '',
   dischargeDate: '',
   description: '',
   status: 'active',
   job: 'receptionist',
   profileImg: '',
   password: ''
}