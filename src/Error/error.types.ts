import { fieldErrorsText, locationErrorsText, typeErrorsText } from "./errorList"

export type LocationError = keyof typeof locationErrorsText
export type FieldError = keyof typeof fieldErrorsText
export type TypeError = keyof typeof typeErrorsText

export type Error = null | {
   location?: LocationError | string,
   field?: FieldError | string,
   type?: TypeError | string,
}