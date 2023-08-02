import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slices/Users/adminSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Flatten, NestedProperty } from "../Types/store";
import uiReducer from "./RootSlices/uiSlice";
import modalReducer from "./RootSlices/modalSlice";
import formReducer from "./RootSlices/formSlice";
import reviewsReducer from "./Slices/Reviews/reviewsSlice";
import employeesReducer from "./Slices/Users/employeesSlice";
import roomsReducer from "./Slices/Rooms/roomsSlice";
import errorReducer from "./RootSlices/errorSlice";

export const store = configureStore({
   reducer: {
      ui: uiReducer,
      // modal: modalReducer,
      form: formReducer,
      error: errorReducer,
      admin: adminReducer,
      employees: employeesReducer,
      reviews: reviewsReducer,
      rooms: roomsReducer
   },

})

//Typings
export type StoreType = typeof store
export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
export const useTypedDispatch = () => useDispatch<DispatchType>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type SelectorType = Parameters<typeof useTypedSelector>[0]

export type StorePaths = Flatten<RootState>
export type NestedStorePaths<T extends StorePaths> = Flatten<NestedProperty<RootState, T>>

export const createSelectorFromStringPath = <T extends object>(path: Flatten<T>) => (state: unknown) => {
   if (typeof path !== 'string') throw new Error('Path should be string')
   if (!path) return state
   return path.split(".").reduce((current, key) => {
      // eslint-disable-next-line no-prototype-builtins
      if (current?.hasOwnProperty(key)) return current[key as keyof typeof current]
      return undefined
   }, state)
}

export const selector = createSelectorFromStringPath<RootState>