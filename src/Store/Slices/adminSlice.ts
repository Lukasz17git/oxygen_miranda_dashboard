import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   name: 'Lukasz',
   lastname: 'Maraj',
   email: 'lucas.m2295@gmail.com',
   myData: 111,
   data: {
      myData: 'one',
      files: 24
   }
}

const adminSlice = createSlice({
   name: 'admin',
   initialState,
   reducers: {
      setNameAction(state, { payload }) {
         state.name = payload
      }
   }
})


export const { setNameAction } = adminSlice.actions
export default adminSlice.reducer