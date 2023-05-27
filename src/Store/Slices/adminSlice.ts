import { createSlice } from "@reduxjs/toolkit";

export type AdminState = {
   name: string,
   email?: string,
}

const initialState: AdminState = {
   name: 'Admin'
}

const adminSlice = createSlice({
   name: 'admin',
   initialState,
   reducers: {
      incremented(state) {
         state.name += "1"
      },
      decremented(state) {
         state.name = state.name.slice(-1)
      }
   }
})


export const { incremented, decremented } = adminSlice.actions
export default adminSlice.reducer