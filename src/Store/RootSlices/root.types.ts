import { RootState } from "../store"


// keys in the store that should be skipped for setting new forms or modals
export type RootStateKeys = 'ui' | 'form' | 'modal'

export type NestedObjects<T> = {
   [K in keyof T]: T[K] extends object ? T[K] | NestedObjects<T[K]> : never
}[keyof T]

export type ModalAndFormType = null | {
   [K in keyof RootState]: K extends RootStateKeys ? never : RootState[K] extends object ? RootState[K] | NestedObjects<RootState[K]> : never
}[keyof RootState]


// type PartialUnionOfObjectValues<T> = { [K in keyof T]: T[K] extends object ? (T[K] | PartialUnionOfObjectValues<T[K]>) : never }[keyof T]
// type ModalDataType = null | { [K in keyof RootState]: K extends 'modal' ? never : RootState[K] extends object ? RootState[K] | PartialUnionOfObjectValues<RootState[K]> : RootState[K] }[keyof RootState]
