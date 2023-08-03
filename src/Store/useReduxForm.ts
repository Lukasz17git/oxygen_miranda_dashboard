import { useEffect } from "react"
import { StorePaths, useTypedDispatch } from "./store"
import { clearFormAction, executeSaveFormThunk, setFormThunk } from "./RootSlices/formSlice"
import { AsyncThunk } from "@reduxjs/toolkit"


const useReduxForm = <T extends StorePaths>(path: T, saveDataThunk: AsyncThunk<any, any, any>, newFormInitialState?: Record<string, any>) => {

   const dispatch = useTypedDispatch()

   useEffect(() => {
      dispatch(setFormThunk(newFormInitialState || path))
      return () => {
         dispatch(clearFormAction())
      }
   }, [dispatch])

   const saveForm = async () => {
      await dispatch(executeSaveFormThunk({ pathOrInitialState: newFormInitialState || path, action: saveDataThunk }))
   }

   return {
      path,
      saveForm
   }
}

export default useReduxForm