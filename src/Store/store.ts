import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slices/Users/adminSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import employeesSlice from "./Slices/Users/employeesSlice";
import { Flatten, NestedProperty } from "../Types/types";
import uiReducer from "./RootSlices/uiSlice";
import modalReducer from "./RootSlices/modalSlice";
import formReducer from "./RootSlices/formSlice";

export const store = configureStore({
   reducer: {
      ui: uiReducer,
      // modal: modalReducer,
      form: formReducer,
      admin: adminReducer,
      // employees: employeesSlice,
   },

})

//Typings
export type RootState = ReturnType<typeof store.getState>
export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type SelectorType = Parameters<typeof useTypedSelector>[0]

export type StorePaths = Flatten<RootState>
export type NestedStorePaths<T extends StorePaths> = Flatten<NestedProperty<RootState, T>>

export const createSelectorFromStringPath = <T extends object>(path: Flatten<T>) => (state: unknown) => {
   if (typeof path !== 'string') throw new Error('Path should be string')
   if (!path) return state
   return path.split(".").reduce((current, key) => {
      if (current?.hasOwnProperty(key)) return current[key as keyof typeof current]
      return undefined
   }, state)
}

export const selector = createSelectorFromStringPath<RootState>