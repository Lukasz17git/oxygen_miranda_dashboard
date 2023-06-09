import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wait from '../../Utils/wait.js'
import { getDataFromLocalStore, updateDataToLocalStore } from '../../Utils/localStore'
import { RootState } from "../store.js";
import { nanoid } from "nanoid";


type EmployeeType = {
   __copy__: Omit<EmployeeType, "__copy__">
   id: string,
   createdAt: number, //or better date?
   name: string,
   lastname: string,
   email: string,
   phone: string,
   dischargeDate: string, //or better date?
   description: string,
   state: 'active' | 'inactive' | 'vacation',
   job: 'receptionist' | 'rooms_service',
   profileUrl: string
}

const initialForm: Omit<EmployeeType, '__copy__' | 'id' | 'createdAt'> = {
   name: '',
   lastname: '',
   email: '',
   phone: '',
   dischargeDate: '2023-06-09', //or better date?
   description: '',
   state: 'active',
   job: 'receptionist',
   profileUrl: ''
}

type EmployeesType = {
   newForm: typeof initialForm,
   loading: 'pending' | 'succeeded' | 'failed',
   list: EmployeeType[]
}

const initialState: EmployeesType = {
   newForm: initialForm,
   loading: 'succeeded',
   list: []
}

const employeesSlice = createSlice({
   name: 'employees',
   initialState: initialState,
   reducers: {
      updateEmployeeFieldAction: (state, action: PayloadAction<{ path: string, value: unknown }>) => {
         const { path, value } = action.payload
         const pathArray = path.split('.')
         const lastKey = pathArray.pop() as string
         const parent = pathArray.reduce((prev, keyPath) => prev[keyPath], state)
         parent[lastKey] = value
      },
      resetEmployeeAction: (state, action: PayloadAction<number>) => {
         const index = action.payload
         state.list[index] = {
            ...state.list[index].__copy__,
            __copy__: state.list[index].__copy__
         }
      },
      resetNewEmployeeAction: (state) => {
         state.newForm = initialForm
      }
   },
   extraReducers(builder) {
      builder.addCase(getEmployeesDataThunk.fulfilled, (state, action) => {
         state.list = action.payload.map(employee => ({ ...employee, __copy__: employee }))
      })

      builder.addCase(saveEmployeeThunk.fulfilled, (state, action) => {
         const index = state.list.findIndex(employee => employee.id === action.payload.id)
         state.list[index] = { ...action.payload, __copy__: action.payload }
      })

      builder.addCase(createNewEmployeeThunk.fulfilled, (state, action) => {
         const newEmployee = action.payload
         const newEmployeeWithCopy: EmployeeType = { ...newEmployee, __copy__: newEmployee }
         state.list.push(newEmployeeWithCopy)
      })
   },
})

export const getEmployeesDataThunk = createAsyncThunk(
   'employees/get',
   async () => {
      await wait(500)
      const dataFromServer = getDataFromLocalStore('miranda/employees')
      const data: EmployeeType[] = dataFromServer || initialState
      return data
   }
)

export const saveEmployeeThunk = createAsyncThunk(
   'employee/save',
   async (index: number, { getState }) => {
      const state = getState() as RootState
      const { __copy__, ...updates } = state.employees.list[index]
      await wait(1000)

      // im maping this right now because i need to save all object again in local store, with server would not be needed
      const withoutCopies = state.employees.list.map(employee => {
         const { __copy__, ...goodEmployee } = employee
         return goodEmployee
      })

      updateDataToLocalStore('miranda/employees', withoutCopies)
      //

      return updates
   }
)

export const createNewEmployeeThunk = createAsyncThunk(
   'employee/create',
   async (_, { getState }) => {
      const state = getState() as RootState
      const newEmployee = state.employees.newForm
      await wait(1000)

      // adding created date and id
      const newEmployeeFromDb: Omit<EmployeeType, "__copy__"> = { ...newEmployee, id: nanoid(), createdAt: Date.now() }

      // im maping this right now because i need to save all object again in local store, with server would not be needed
      const withoutCopies = state.employees.list.map(employee => {
         const { __copy__, ...goodEmployee } = employee
         return goodEmployee
      })
      withoutCopies.push(newEmployeeFromDb)

      updateDataToLocalStore('miranda/employees', withoutCopies)

      return newEmployeeFromDb
   }
)

export const { resetEmployeeAction, updateEmployeeFieldAction, resetNewEmployeeAction } = employeesSlice.actions
export default employeesSlice.reducer