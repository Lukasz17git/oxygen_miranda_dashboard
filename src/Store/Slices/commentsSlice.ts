import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CommentType = {
   name: string,
   email: string,
   comment: string,
   date: Date
}

const initialState: {
   comments: CommentType[]
} = {
   comments: []
}

const adminSlice = createSlice({
   name: 'comments',
   initialState,
   reducers: {
      addCommentAction(state, action: PayloadAction<CommentType>) {
         state.comments.push(action.payload)
      },
   }
})


export const { addCommentAction } = adminSlice.actions
export default adminSlice.reducer