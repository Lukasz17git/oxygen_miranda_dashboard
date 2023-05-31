import { DetailedHTMLProps, SelectHTMLAttributes, useMemo } from 'react'

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
   ...props
}: SelectType) => {

   const value = props.value

   const options = useMemo(() => Object.keys(optionsMap), [optionsMap])

   const isValueAvailable = value === '' || typeof value === 'string' && options.includes(value)

   return (
      <label
         aria-label={label}
         className={`base-select-wrapper ${wrapperClassName || ''}`}>
         <select
            value=''
            {...props}
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