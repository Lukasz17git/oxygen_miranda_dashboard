import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wait from '../../Utils/wait.js'
import { getDataFromLocalStore, updateDataToLocalStore } from '../../Utils/localStore'
import { RootState } from "../store.js";


type ManagerType = {
   __copy__: Omit<ManagerType, "__copy__">
   id: string,
   createdAt: number, //or better date?
   name: string,
   lastname: string,
   email: string,
   password: string,
   phone: string,
   description: string,
   state: 'active' | 'inactive' | 'vacation',
   profileUrl: string
}

const initialStateWithoutCopy: Omit<ManagerType, "__copy__"> = {
   id: '',
   createdAt: 0,
   name: '',
   lastname: '',
   email: '',
   password: '',
   phone: '',
   description: '',
   state: 'active',
   profileUrl: ''
}
const initialState: ManagerType = {
   __copy__: initialStateWithoutCopy,
   ...initialStateWithoutCopy
}

const adminSlice = createSlice({
   name: 'admin',
   initialState: initialState,
   reducers: {
      updateAdminFieldAction: (state, action: PayloadAction<{ path: keyof ManagerType, value: unknown }>) => {
         const { path, value } = action.payload
         state[path] = value
      },
      resetAdminFormAction: (state) => {
         return { ...state.__copy__, __copy__: state.__copy__ }
      }
   },
   extraReducers(builder) {
      builder.addCase(getAdminDataThunk.fulfilled, (_, action) => {
         return { ...action.payload, __copy__: action.payload }
      })

      builder.addCase(saveAdminThunk.fulfilled, (_, action) => {
         return { ...action.payload, __copy__: action.payload }
      })
   },
})

export const getAdminDataThunk = createAsyncThunk(
   'admin/get',
   async () => {
      await wait(1000)
      console.log('getting data')
      const dataFromServer = getDataFromLocalStore('miranda/admin')
      console.log(dataFromServer)
      const data: ManagerType = dataFromServer || initialState
      return data
   }
)

export const saveAdminThunk = createAsyncThunk(
   'admin/save',
   async (_, { getState }) => {
      const state = getState() as RootState
      const { __copy__, ...updates } = state.admin
      await wait(1000)
      const dataFromServer = updateDataToLocalStore('miranda/admin', updates)
      return dataFromServer
   }
)


export const { resetAdminFormAction, updateAdminFieldAction } = adminSlice.actions
export default adminSlice.reducer