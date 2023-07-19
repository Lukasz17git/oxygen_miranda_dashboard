import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";


const customFetch = <T>(dispatch: ThunkDispatch<unknown, unknown, AnyAction>, uri: Parameters<typeof fetch>[0], options: Parameters<typeof fetch>[1]) => new Promise<T>((resolve, reject) => {
   (async () => {
      const response = await fetch(uri, options)
      const data = await (response.headers.get("content-type")?.includes('json') ? response.json() : response.text())
      if (response.status > 300) {
         // dispatch() the custom error
         return reject(data)
      }
      return resolve(data)
   })()
})

export default customFetch