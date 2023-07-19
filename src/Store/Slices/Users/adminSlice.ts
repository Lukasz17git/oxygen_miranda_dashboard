import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialAdminState } from "./users.data.js";
import { UserType } from "./users.types.js";
import { loginUri, usersUri } from "../../../Uris/uris.js";
import customFetch from "../../../Utils/customFetch.js";


const adminSlice = createSlice({
   name: 'admin',
   initialState: initialAdminState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(authenticateAdminThunk.fulfilled, (_, action) => {
         return action.payload
      })
      builder.addCase(saveAdminThunk.fulfilled, (state, action) => {
         const updatedData = { ...state, ...action.payload }
         return updatedData
      })
   },
})

export const authenticateAdminThunk = createAsyncThunk(
   'admin/authenticate',
   async (loginData: Pick<UserType, 'email' | 'password'>, { dispatch }) => {
      const adminData = await customFetch<UserType>(dispatch, loginUri, {
         method: 'POST',
         credentials: "include",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(loginData)
      })
      return adminData
   }
)

export const saveAdminThunk = createAsyncThunk(
   'admin/save',
   async (updatesWithId: UserType, { dispatch }) => {
      const { _id, ...updates } = updatesWithId
      await customFetch<UserType>(dispatch, usersUri, {
         method: 'PUT',
         credentials: "include",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updates)
      })
      console.log('updates', updates)
      return updates
   }
)

export default adminSlice.reducer