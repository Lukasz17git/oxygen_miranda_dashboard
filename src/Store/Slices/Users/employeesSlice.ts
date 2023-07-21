import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "./users.types.js";
import customFetch from "../../../Utils/customFetch.js";
import { usersUri } from "../../../Uris/uris.js";
import { WithId } from "../../../Types/mongo.js";

const employeesSlice = createSlice({
   name: 'employees',
   initialState: [] as UserType[],
   reducers: {},
   extraReducers(builder) {
      builder.addCase(getEmployeesThunk.fulfilled, (_, action) => action.payload)
      builder.addCase(createNewEmployeeThunk.fulfilled, (state, action) => {
         state.push(action.payload)
      })
      builder.addCase(updateEmployeeThunk.fulfilled, (state, action) => {
         const { _id, ...updates } = action.payload
         const index = state.findIndex(employee => employee._id === _id)
         if (index === -1) return state
         state[index] = { ...state[index], ...updates }
      })
      builder.addCase(deleteEmployeeThunk.fulfilled, (state, action) => {
         const index = state.findIndex(employee => employee._id === action.payload)
         if (index === -1) return state
         state.splice(index, 1)
      })
   },
})

export const getEmployeesThunk = createAsyncThunk(
   'employees/get',
   async (_, { dispatch }) => {
      const employees = await customFetch<UserType[]>(dispatch, usersUri, {
         method: 'GET',
         credentials: "include",
      })
      console.log('employees', employees)
      return employees
   }
)

export const createNewEmployeeThunk = createAsyncThunk(
   'employees/post',
   async (employeeData, { dispatch }) => {
      const newEmployee = await customFetch<UserType>(dispatch, usersUri, {
         method: 'POST',
         credentials: "include",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(employeeData)
      })
      return newEmployee
   }
)

export const updateEmployeeThunk = createAsyncThunk(
   'employees/put',
   async (updatesWithId: WithId<Partial<UserType>>, { dispatch }) => {
      const { _id, ...updates } = updatesWithId
      await customFetch(dispatch, `${usersUri}/${_id}`, {
         method: 'PUT',
         credentials: "include",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updates)
      })
      return updatesWithId
   }
)

export const deleteEmployeeThunk = createAsyncThunk(
   'employees/delete',
   async (employeeId: string, { dispatch }) => {
      await customFetch(dispatch, `${usersUri}/${employeeId}`, {
         method: 'DELETE',
         credentials: "include",
      })
      return employeeId
   }
)

const employeesReducer = employeesSlice.reducer
export default employeesReducer