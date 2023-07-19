import { DetailedHTMLProps, SelectHTMLAttributes, useMemo } from 'react'
import { NestedStorePaths, StorePaths, selector, useTypedSelector } from '../Store/store'
import { useDispatch } from 'react-redux'
import { updateFormValueAction } from '../Store/RootSlices/formSlice'

type SelectType<T extends StorePaths> = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
   label: string,
   optionsMap: Record<string, string | number>
   disableLabelAsOption?: boolean
   deletedValueText?: string
   wrapperClassName?: string
   labelClassName?: string
   optionClassName?: string
   invalidSelectClassName?: string
   invalidLabelClassName?: string
   path: T
   fieldPath: NestedStorePaths<T>

}

const Select = <T extends StorePaths>({
   label,
   optionsMap,
   disableLabelAsOption = false,
   deletedValueText,
   labelClassName,
   wrapperClassName,
   optionClassName,
   invalidSelectClassName,
   invalidLabelClassName,
   path,
   fieldPath,
   ...props
}: SelectType<T>) => {

   const value = useTypedSelector(state => {
      const valueInsideForm = selector(`form.${fieldPath}` as StorePaths)(state)
      const originalValue = selector(`${path}.${fieldPath}` as StorePaths)(state)
      if (valueInsideForm !== undefined) return valueInsideForm
      return originalValue
   }) as string

   const dispatch = useDispatch()
   const setValue = (value: string) => {
      dispatch(updateFormValueAction({ stringPath: fieldPath, value }))
   }

   const options = useMemo(() => Object.keys(optionsMap), [optionsMap])

   const isValueAvailable = value === '' || typeof value === 'string' && options.includes(value)

   return (
      <label
         aria-label={label}
         className={`base-select-wrapper ${wrapperClassName || ''}`}>
         <select
            {...props}
            value={value}
            onChange={e => setValue(e.target.value)}
            className={`${props.className || ''} ${isValueAvailable ? '' : `base-select-invalid ${invalidSelectClassName || ''}`}`}
         >
            {disableLabelAsOption || <option disabled={!value} hidden={!value} value={''}>{(props.required ? '*' : '') + label}</option>}
            {!isValueAvailable && <option disabled hidden value={value}>{deletedValueText}</option>}
            {options.map(option => (
               <option
                  key={option}
                  className={`${optionClassName || ''}`}
                  value={option}>
                  {optionsMap[option]}
               </option>
            ))}
         </select>
         {value !== '' && (
            <span
               className={`${labelClassName || ''} ${isValueAvailable ? '' : `${invalidLabelClassName || ''}`}`}>
               {label}
            </span>
         )}
      </label>
   )
}

export default Select