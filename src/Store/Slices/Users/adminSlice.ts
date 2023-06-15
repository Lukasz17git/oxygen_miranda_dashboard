import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wait from '../../../Utils/wait.js'
import { getDataFromLocalStore, updateDataToLocalStore } from '../../../Utils/localStore.js'
import { AdminType, initialAdminState } from "./users.data.js";



const adminSlice = createSlice({
   name: 'admin',
   initialState: initialAdminState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(getAdminDataThunk.fulfilled, (_, action) => {
         return action.payload
      })

      builder.addCase(saveAdminThunk.fulfilled, (_, action) => {
         return action.payload
      })
   },
})

export const getAdminDataThunk = createAsyncThunk(
   'admin/get',
   async () => {
      await wait(1000)
      console.log('getting data')
      const dataFromServer: AdminType | null = getDataFromLocalStore('miranda/admin')
      console.log(dataFromServer)
      const data = dataFromServer || initialAdminState
      return data
   }
)

export const saveAdminThunk = createAsyncThunk(
   'admin/save',
   async (updates: AdminType) => {
      await wait(1000)
      const dataFromServer = updateDataToLocalStore('miranda/admin', updates)
      return dataFromServer
   }
)

export default adminSlice.reducer