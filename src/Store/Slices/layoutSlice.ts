import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   sidebar: true,
   isAuthenticated: false
}

const layoutSlice = createSlice({
   name: 'layout',
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

export const { toggleSidebarAction, authenticateAction } = layoutSlice.actions
export default layoutSlice.reducer