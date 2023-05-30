// type PartialUnionOfObjectValues<T> = UnionToIntersection<{ [K in keyof T]: T[K] extends object ? Partial<T[K]> & PartialUnionOfObjectValues<T[K]> : never }[keyof T]>


// type ModalDataType = null | UnionToIntersection<{ [K in keyof RootState]: K extends 'modal' ? never : RootState[K] extends object ? Partial<RootState[K]> & PartialUnionOfObjectValues<RootState[K]> : Partial<RootState[K]> }[keyof RootState]>


// const a: MyType = { mydata: }
// type ModalDataType = null | UnionToIntersection<{ [K in keyof RootState]: K extends 'modal' ? never : Partial<RootState[K]> }[keyof RootState]>
// const a: MyType = { tsType:  }