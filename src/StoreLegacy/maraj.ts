const store = {
   name: 'lucas',
   moreData: null,
   data: {
      phone: 123,
      age: 27,
      done: true
   },
   files: [
      { name: 'file1' },
      { name: 'file2' }
   ]
}
type Store = typeof store

// GOOOD!!!!
type NestedProperty<T, S extends string> =
   S extends '' ? T
   : S extends keyof T ? T[S]
   : S extends `${number}` ? T extends Array<infer U> ? S extends `${number}.${infer K}` ? K extends keyof U ? NestedProperty<U, K> : never : U : never
   : S extends `${infer K}.${infer R}` ? K extends keyof T ? NestedProperty<T[K], R> : K extends `${number}` ? T extends Array<infer U> ? NestedProperty<U, R> : never : never
   : never

// GOOOD BUT WITHOUT INTELLISENSE AFTER ARRAY, ALSO GIVES SOME FALSE POSITIVES IF DECIMAL NUMBERS ARE TYPED
type Flatten<T> =
   T extends Array<infer U>
   ? `length` | `${number}` | '${index}' | `${number}.${Flatten<U>}` | `\${index}.${Flatten<U>}`
   : T extends object
   ? { [K in keyof T & string]: `${K}` | `${K}.${Flatten<T[K]>}` }[keyof T & string]
   : { [K in keyof T & string]: T[K] extends string | number | boolean | null ? `${K}` | `${K}.${Flatten<T[K]>}` : never }[keyof T & string];


type CreateImmutableUpdate = <T extends Flatten<Store>>(path: T) => NestedProperty<Store, T>


const createImmutableUpdate = <T extends object>(state: T, update: { [K in Flatten<T>]?: NestedProperty<T, K> }) => {
   if (state?.constructor !== Object && !Array.isArray(state)) return state
   const newState = Array.isArray(state) ? [...state] as T : { ...state }
   const visited: Record<string, object> = {}
   for (const [path, value] of Object.entries(update)) {
      if (!path || path === 'false' || path === 'undefined' || path === 'null') continue
      const keys = path.split(".")
      const lastkey = keys.pop()
      let tracker = visited
      let current = newState
      for (const key of keys) {
         if (typeof current[key] !== 'object') throw new Error(`Destructure "${key}" in "${path}" with value: ${current[key]}`)
         if (!tracker[key]) {
            current[key] = Array.isArray(current[key]) ? [...current[key]] : { ...current[key] }
            tracker[key] = {}
         }
         current = current[key]
         tracker = tracker[key]
      }
      if (lastkey) {
         delete tracker[lastkey]
         current[lastkey] = typeof value === 'function' ? value(current[lastkey]) : value
      }
   }
   return newState
}
export default createImmutableUpdate



export const createSelectorFromStringPath = <T extends object>(path: Flatten<T>) => (state: T) => {
   if (typeof path !== 'string') throw new Error('Path should be string')
   if (!path) return state
   return path.split(".").reduce((current, key) => {
      if (current?.hasOwnProperty(key)) return current[key]
      return undefined
   }, state)
}

export const select = createSelectorFromStringPath<typeof store>
