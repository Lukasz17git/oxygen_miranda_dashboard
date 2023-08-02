import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Error } from "../../Error/error.types";

const initialState = null as Error

const errorSlice = createSlice({
   name: 'error',
   initialState,
   reducers: {
      setNewErrorAction: (_, action: PayloadAction<Error>) => {
         const newError = action.payload
         return newError
      },
      clearErrorAction: () => {
         return initialState
      }
   }
})

export const { setNewErrorAction, clearErrorAction } = errorSlice.actions
const errorReducer = errorSlice.reducer
export default errorReducer