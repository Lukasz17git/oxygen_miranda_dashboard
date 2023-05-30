import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { wrapperClassName?: string, labelClassName?: string, label?: string }

const Input = ({ wrapperClassName, labelClassName, label, ...props }: InputType) => {

   return (
      <label className={`tw-base-input ${wrapperClassName || ''}`}>
         <input
            type='text'
            {...props}
            className={`${props.className || ''}`}
         />
         <span className={labelClassName}>
            {label}
         </span>
      </label>
   )
}

export default Input