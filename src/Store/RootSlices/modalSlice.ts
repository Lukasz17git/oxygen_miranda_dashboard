import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flatten } from "../../Types/types";
import { ModalAndFormType } from "./root.types";

const initialState = null

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      clearModalAction: () => {
         return initialState
      },
      setModalAction: (_, action: PayloadAction<ModalAndFormType>) => {
         return action.payload
      },
      updateModalValueAction: (state, action: PayloadAction<{ stringPath: Flatten<typeof state>, value: unknown }>) => {
         const { stringPath, value } = action.payload
         const path = stringPath.split('.')
         const prop = path.pop() as string //it cant be undefined
         if (!state || !prop) return state
         const obj = path.reduce((innerSection, middleProp) => innerSection[middleProp as keyof typeof innerSection], state)
         obj[prop as keyof typeof obj] = value as typeof obj[keyof typeof obj]
      }
      // maybe also add push item, and remove item from arrays
   }
})

const modalReducer = modalSlice.reducer
export default modalReducer
export const { clearModalAction, setModalAction, updateModalValueAction } = modalSlice.actions




/**
 *
 * 




const createModalAction = (id: ModalIDsType, selector: SelectorType) =>
   (dispatch: typeof store.dispatch, getState: typeof store.getState) =>
      dispatch(setModalDataAction({ id, data: selector(getState()) }))

export const setSettingsModalAction = () => createModalAction('settings', state => state.admin)



 */