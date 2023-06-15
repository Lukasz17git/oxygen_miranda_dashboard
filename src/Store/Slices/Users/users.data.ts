
export type UserStateType = 'active' | 'inactive' | 'vacation'


///////////////////////////////////////////
//
// ADMIN
//
///////////////////////////////////////////

export const initialAdminState = {
   id: '',
   createdAt: 0,
   name: '',
   lastname: '',
   email: '',
   password: '',
   phone: '',
   description: '',
   state: 'active' as UserStateType,
   profileUrl: '',
}
export type AdminType = typeof initialAdminState


///////////////////////////////////////////
//
// EMPLOYEES
//
///////////////////////////////////////////


export type EmployeeJobsType = 'receptionist' | 'rooms_service'

export const initialEmployeeState = {
   name: '',
   lastname: '',
   email: '',
   phone: '',
   dischargeDate: '2023-06-09',
   description: '',
   state: 'active' as UserStateType,
   job: 'receptionist' as EmployeeJobsType,
   profileUrl: ''
}

export type EmployeeType = typeof initialEmployeeState