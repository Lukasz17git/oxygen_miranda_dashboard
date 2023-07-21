

export type WithoutId<T> = Omit<T, '_id'>

export type WithId<T> = T & { _id: string }