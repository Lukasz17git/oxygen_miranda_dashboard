export type Flatten<T> =
   T extends Array<infer U>
   ? `length` | `${number}` | '${index}' | `${number}.${Flatten<U>}` | `\${index}.${Flatten<U>}`
   : T extends object
   ? { [K in keyof T & string]: `${K}` | `${K}.${Flatten<T[K]>}` }[keyof T & string]
   : { [K in keyof T & string]: T[K] extends string | number | boolean | null ? `${K}` | `${K}.${Flatten<T[K]>}` : never }[keyof T & string];


export type NestedProperty<T, S extends string> =
   S extends '' ? T
   : S extends keyof T ? T[S]
   : S extends `${number}` ? T extends Array<infer U> ? S extends `${number}.${infer K}` ? K extends keyof U ? NestedProperty<U, K> : never : U : never
   : S extends `${infer K}.${infer R}` ? K extends keyof T ? NestedProperty<T[K], R> : K extends `${number}` ? T extends Array<infer U> ? NestedProperty<U, R> : never : never
   : never

