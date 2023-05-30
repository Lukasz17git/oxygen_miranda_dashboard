import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slices/adminSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import layoutSlice from "./Slices/layoutSlice";


export const store = configureStore({
   reducer: {
      admin: adminReducer,
      layout: layoutSlice,
   }
})

//Typings
export type RootState = ReturnType<typeof store.getState>
export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
