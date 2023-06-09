import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slices/adminSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import layoutSlice from "./Slices/layoutSlice";
import modalSlice from "./Slices/modalSlice";
import { createSelectorFromStringPath } from "../StoreLegacy/maraj";
import employeesSlice from "./Slices/employeesSlice";

export const store = configureStore({
   reducer: {
      layout: layoutSlice,
      modal: modalSlice,
      admin: adminReducer,
      employees: employeesSlice
   },

})

//Typings
export type RootState = ReturnType<typeof store.getState>
export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type SelectorType = Parameters<typeof useTypedSelector>[0]


type Flatten<T> =
   T extends Array<infer U>
   ? `length` | `${number}` | '${index}' | `${number}.${Flatten<U>}` | `\${index}.${Flatten<U>}`
   : T extends object
   ? { [K in keyof T & string]: `${K}` | `${K}.${Flatten<T[K]>}` }[keyof T & string]
   : { [K in keyof T & string]: T[K] extends string | number | boolean | null ? `${K}` | `${K}.${Flatten<T[K]>}` : never }[keyof T & string];

export type StorePaths = Flatten<RootState>

export const selector = createSelectorFromStringPath<RootState>