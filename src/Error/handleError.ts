
import { setNewErrorAction } from "../Store/RootSlices/errorSlice"
import { Error, FieldError, LocationError } from "./error.types"
import { locationErrorsText, fieldErrorsText, typeErrorsText } from "./errorList"
import { AnyAction, Dispatch } from "redux"

// const errorTemplate = { location: '', field: '', type: '', isLocalError: false }

const unknownError = { location: locationErrorsText.app, type: typeErrorsText.unknown }
const serverError = { location: locationErrorsText.app, type: typeErrorsText.server }
const runningWithoutServerError = { location: locationErrorsText.app, field: fieldErrorsText.server, type: typeErrorsText.missing }

export const newError = (location: LocationError, field: FieldError, type: TypeError) => ({
   ...location && { location },
   ...field && { field },
   ...type && { type },
   isLocalError: true
})

const handleError = (dispatch: Dispatch<AnyAction>, error: Error | any) => {

   console.log('error', error)

   if (typeof error !== 'object') return dispatch(setNewErrorAction(unknownError))

   if (error.isLocalError) return dispatch(setNewErrorAction(error))

   if (error.status === 500) return dispatch(setNewErrorAction(serverError))

   if (error.message === 'Failed to fetch') return dispatch(setNewErrorAction(runningWithoutServerError))

   const data = error.data
   if (!data || typeof data !== 'object' || Array.isArray(data)) return dispatch(setNewErrorAction(unknownError))

   //errors comming from custom server, which currently isnt our case, but ll be easy to implement using this line
   return dispatch(setNewErrorAction(error.data))
}

export default handleError