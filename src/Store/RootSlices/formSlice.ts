import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, selector, StorePaths } from "../store";
import compareDataAndGetChangedFieldsMaintainingId from "../../Utils/compareDataAndGetChangedFieldsMaintainingId";

const initialState = null as null | Record<string, any>

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
   (pathOrInitialState: StorePaths | Record<string, any>, { getState }) => {
      const state = getState() as RootState
      const data = typeof pathOrInitialState === 'string' ? selector(pathOrInitialState)(state) as Record<string, any> : pathOrInitialState
      return data
   }
)
type SaveFormDataType = { pathOrInitialState: StorePaths | Record<string, any>, action: AsyncThunk<any, any, any> }
export const executeSaveFormThunk = createAsyncThunk(
   'form/saveData',
   (payload: SaveFormDataType, { getState, dispatch }) => {
      const store = getState() as RootState
      const originalData = typeof payload.pathOrInitialState === 'string' && selector(payload.pathOrInitialState)(store) as Record<string, any>
      const updatedData = store.form
      if (!updatedData) return
      const updates = originalData ? compareDataAndGetChangedFieldsMaintainingId(originalData, updatedData) : updatedData
      const updateKeys = Object.keys(updates)
      if (updateKeys.length === 0 || (updateKeys.length === 1 && updateKeys[0] === '_id')) return
      dispatch(payload.action(updates))
   }
)

const formReducer = formSlice.reducer
export default formReducer
export const { clearFormAction, updateFormValueAction } = formSlice.actions