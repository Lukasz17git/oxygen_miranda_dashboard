
type InputProps = {
   value?: string | number,
   onChange?: React.ChangeEventHandler<HTMLInputElement>,
   label?: string,
   placeholder?: string,
   onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>,
   className?: string,
   inputClassName?: string,
   labelClassName?: string
}

const Input = ({ value, onChange, label, placeholder, onKeyDown, className = '', inputClassName = '', labelClassName }: InputProps) => {

   return (
      <label className={`input ${className}`}>
         <input
            className={inputClassName}
            value={value}
            onChange={onChange}
            type='text'
            placeholder={placeholder}
            onKeyDown={onKeyDown}
         />
         <span className={labelClassName}>
            {label}
         </span>
      </label>
   )
}

export default Input