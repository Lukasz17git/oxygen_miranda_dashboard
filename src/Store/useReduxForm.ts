import { useEffect } from "react"
import { StorePaths, useTypedDispatch } from "./store"
import { setFormThunk } from "./RootSlices/formSlice"


const useReduxForm = <T extends StorePaths>(path: T) => {

   const dispatch = useTypedDispatch()

   useEffect(() => {
      dispatch(setFormThunk(path))
   }, [])

   return path
}

export default useReduxForm