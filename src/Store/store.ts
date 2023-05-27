import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slices/adminSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
   reducer: {
      admin: adminReducer
   }
})

//Typings
type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
