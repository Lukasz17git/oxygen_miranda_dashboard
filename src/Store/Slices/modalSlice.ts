
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SelectorType, store } from "../store"

// type PartialUnionOfObjectValues<T> = { [K in keyof T]: T[K] extends object ? (T[K] | PartialUnionOfObjectValues<T[K]>) : never }[keyof T]
// type ModalDataType = null | { [K in keyof RootState]: K extends 'modal' ? never : RootState[K] extends object ? RootState[K] | PartialUnionOfObjectValues<RootState[K]> : RootState[K] }[keyof RootState]
type ModalType = { data?: unknown, id: ModalIDsType }


type ModalIDsType = '' | 'settings' | 'comment'
const initialState: ModalType = {
   id: '',
   data: null
}

type UpdateModalDataType = {
   path: string,
   value: unknown
}

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      closeModalAction(state) {
         return initialState
      },
      setModalDataAction(state, action: PayloadAction<ModalType>) {
         state.id = action.payload.id
         if (action.payload.data) state.data = action.payload.data
      },
      updateModalDataAction(state, action: PayloadAction<UpdateModalDataType>) {

      }
   },
})

const createModalAction = (id: ModalIDsType, selector: SelectorType) =>
   (dispatch: typeof store.dispatch, getState: typeof store.getState) =>
      dispatch(setModalDataAction({ id, data: selector(getState()) }))

export const setSettingsModalAction = () => createModalAction('settings', state => state.admin)
// export const setCommentModalAction = (index) => createModalAction('comment', state => state.comments)


export default modalSlice.reducer
export const { setModalDataAction, closeModalAction } = modalSlice.actions