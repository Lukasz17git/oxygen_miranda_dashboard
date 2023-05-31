import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { label: string, wrapperClassName?: string, labelClassName?: string }

const Input = ({ wrapperClassName, labelClassName, label, children, ...props }: InputType) => {

   return (
      <label
         aria-label={label}
         className={`base-input-wrapper ${wrapperClassName || ''}`}
      >
         <input
            type='text'
            {...props}
            className={`${props.className || ''}`}
         />
         <span className={labelClassName}>
            {label}
         </span>
         {children}
      </label>
   )
}

export default Input