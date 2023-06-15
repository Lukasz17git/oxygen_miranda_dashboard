import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { StorePaths, useTypedSelector, selector, useTypedDispatch, NestedStorePaths } from '../Store/store'
import { updateFormValueAction } from '../Store/RootSlices/formSlice'


type InputType<T extends StorePaths> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
   label: string,
   wrapperClassName?: string,
   labelClassName?: string,
   path: T,
   fieldPath: NestedStorePaths<T>
}

const ReduxInput = <T extends StorePaths>({ wrapperClassName, labelClassName, label, children, path, fieldPath, ...props }: InputType<T>) => {

   const value = useTypedSelector(state => {
      const valueInsideForm = selector(`form.${fieldPath}` as StorePaths)(state)
      const originalValue = selector(`${path}.${fieldPath}` as StorePaths)(state)
      if (valueInsideForm !== undefined) return valueInsideForm
      return originalValue
   }) as string

   const dispatch = useTypedDispatch()
   const setValue = (value: string) => {
      dispatch(updateFormValueAction({ stringPath: fieldPath, value }))
   }

   console.log('rendered redux input', value)
   return (
      <label
         aria-label={label}
         className={`base-input-wrapper ${wrapperClassName || ''}`}
      >
         <input
            type='text'
            {...props}
            value={value}
            onChange={e => setValue(e.target.value)}
            className={`${props.className || ''}`}
         />
         <span className={labelClassName}>
            {label}
         </span>
         {children}
      </label>
   )
}

export default ReduxInput