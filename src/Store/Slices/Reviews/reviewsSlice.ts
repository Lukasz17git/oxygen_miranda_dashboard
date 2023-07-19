import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../../Utils/customFetch.js";
import { reviewsUri } from "../../../Uris/uris.js";
import { ReviewType } from "./reviews.types.js";


const reviewsSlice = createSlice({
   name: 'reviews',
   initialState: [] as ReviewType[],
   reducers: {},
   extraReducers(builder) {
      builder.addCase(getReviewsThunk.fulfilled, (_, action) => action.payload)
      // builder.addCase(createNewReviewThunk.fulfilled, (state, action) => {
      //    state.push(action.payload)
      // })
      builder.addCase(updateReviewThunk.fulfilled, (state, action) => {
         const { _id, ...updates } = action.payload
         const index = state.findIndex(review => review._id === _id)
         if (index === -1) return state
         state[index] = { ...state[index], ...updates }
      })
      builder.addCase(deleteReviewThunk.fulfilled, (state, action) => {
         const index = state.findIndex(review => review._id === action.payload)
         if (index === -1) return state
         state.splice(index, 1)
      })
   },
})


export const getReviewsThunk = createAsyncThunk(
   'reviews/get',
   async (_, { dispatch }) => {
      const reviews = await customFetch<ReviewType[]>(dispatch, reviewsUri, {
         method: 'GET',
         credentials: "include",
      })
      return reviews
   }
)

// export const createNewReviewThunk = createAsyncThunk(
//    'employees/post',
//    async (employeeData, { dispatch }) => {
//       const newEmployee = await customFetch<UserType>(dispatch, usersUri, {
//          method: 'POST',
//          credentials: "include",
//          headers: { "Content-Type": "application/json" },
//          body: JSON.stringify(employeeData)
//       })
//       return newEmployee
//    }
// )

export const updateReviewThunk = createAsyncThunk(
   'reviews/put',
   async (updatesWithId: ReviewType, { dispatch }) => {
      const { _id, ...updates } = updatesWithId
      await customFetch(dispatch, `${reviewsUri}${_id}`, {
         method: 'PUT',
         credentials: "include",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updates)
      })
      return updatesWithId
   }
)

export const deleteReviewThunk = createAsyncThunk(
   'reviews/delete',
   async (reviewId: string, { dispatch }) => {
      await customFetch(dispatch, `${reviewsUri}${reviewId}`, {
         method: 'DELETE',
         credentials: "include",
      })
      return reviewId
   }
)

const reviewsReducer = reviewsSlice.reducer
export default reviewsReducer