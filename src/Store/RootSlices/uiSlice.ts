import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   sidebar: true,
   isAuthenticated: false
}

const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      toggleSidebarAction(state) {
         state.sidebar = !state.sidebar
      },
      authenticateAction: (state) => {
         state.isAuthenticated = true
      }
   }
})

export const { toggleSidebarAction, authenticateAction } = uiSlice.actions
const uiReducer = uiSlice.reducer
export default uiReducer