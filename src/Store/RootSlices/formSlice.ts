import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, selector, StorePaths } from "../store";

const initialState = null as unknown

const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {
      clearFormAction: () => {
         return initialState
      },
      updateFormValueAction: (state, action: PayloadAction<{ stringPath: string, value: unknown }>) => {
         const { stringPath, value } = action.payload
         const path = stringPath.split('.')
         const prop = path.pop() as string //it cant be undefined
         if (!state || !prop) return state
         const obj = path.reduce((innerSection, middleProp) => innerSection[middleProp as keyof typeof innerSection], state)
         obj[prop as keyof typeof obj] = value as typeof obj[keyof typeof obj]
      }
      // maybe also add push item, and remove item from arrays
   },
   extraReducers(builder) {
      builder.addCase(setFormThunk.fulfilled, (_, action) => {
         return action.payload
      })
   }
})

export const setFormThunk = createAsyncThunk(
   'form/setData',
   (path: StorePaths, { getState }) => {
      const state = getState() as RootState
      const data = selector(path)(state)
      return data
   }
)

const formReducer = formSlice.reducer
export default formReducer
export const { clearFormAction, updateFormValueAction } = formSlice.actions