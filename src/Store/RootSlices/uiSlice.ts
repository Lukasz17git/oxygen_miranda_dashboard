import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   sidebar: true,
   isAuthenticated: true
}

const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      toggleSidebarAction(state) {
         state.sidebar = !state.sidebar
      }
   }
})

export const { toggleSidebarAction } = uiSlice.actions
const uiReducer = uiSlice.reducer
export default uiReducer