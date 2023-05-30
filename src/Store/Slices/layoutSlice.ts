import { createSlice } from "@reduxjs/toolkit"



const initialState = {
   sidebar: true,
}

const layoutSlice = createSlice({
   name: 'layout',
   initialState,
   reducers: {
      toggleSidebarAction(state) {
         state.sidebar = !state.sidebar
      }
   }
})

export const { toggleSidebarAction } = layoutSlice.actions
export default layoutSlice.reducer