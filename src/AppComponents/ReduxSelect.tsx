import { DetailedHTMLProps, SelectHTMLAttributes, useMemo } from 'react'
import { StorePaths, selector, useTypedSelector } from '../Store/store'
import { AnyAction } from 'redux'
import { useDispatch } from 'react-redux'

type SelectType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
   label: string,
   optionsMap: Record<string, string | number>
   disableLabelAsOption?: boolean
   deletedValueText?: string
   wrapperClassName?: string
   labelClassName?: string
   optionClassName?: string
   invalidSelectClassName?: string
   invalidLabelClassName?: string
   storePath: StorePaths,
   dispatchAction: (v: unknown) => AnyAction
}

const Select = ({
   label,
   optionsMap,
   disableLabelAsOption = false,
   deletedValueText,
   labelClassName,
   wrapperClassName,
   optionClassName,
   invalidSelectClassName,
   invalidLabelClassName,
   storePath,
   dispatchAction,
   ...props
}: SelectType) => {

   const value = useTypedSelector(selector(storePath)) as string
   const idPath = storePath.slice(storePath.indexOf(".") + 1)
   const dispatch = useDispatch()
   const setValue = (value: string) => {
      dispatch(dispatchAction({ path: idPath, value }))
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