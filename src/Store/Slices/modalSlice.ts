
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

type PartialUnionOfObjectValues<T> = { [K in keyof T]: T[K] extends object ? (T[K] | PartialUnionOfObjectValues<T[K]>) : never }[keyof T]
type ModalDataType = null | { [K in keyof RootState]: K extends 'modal' ? never : RootState[K] extends object ? RootState[K] | PartialUnionOfObjectValues<RootState[K]> : RootState[K] }[keyof RootState]
type ModalType = { data?: unknown, id: ModalIDsType }


type ModalIDsType = '' | 'settings' | 'comment'
const initialState: ModalType = {
   id: '',
   data: null
}

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      setModalAction(state, { payload }: { payload: ModalType }) {
         state.id = payload.id
         if (payload.data) state.data = payload.data
      }
   },
})

const createModalAsyncThunk = (id: ModalType['id'], dataSelector?: (k: RootState) => ModalType['data']) => createAsyncThunk(
   `modal/${id}`,
   (_, { dispatch, getState }) => {
      const state = getState() as RootState
      const data = dataSelector ? dataSelector(state) : null
      dispatch(modalSlice.actions.setModalAction(dataSelector ? { id, data } : { id }))
   }
)

export const setSettingsModalAction = createModalAsyncThunk('settings', state => state.admin)
export const setCommentModalAction = createModalAsyncThunk('comment', state => state.comments)


export default modalSlice.reducer