import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { StorePaths, useTypedSelector, selector } from '../Store/store'
import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'


type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
   label: string,
   wrapperClassName?: string,
   labelClassName?: string,
   storePath: StorePaths,
   dispatchAction: (v: unknown) => AnyAction
}

const ReduxInput = ({ wrapperClassName, labelClassName, label, children, storePath, dispatchAction, ...props }: InputType) => {

   const value = useTypedSelector(selector(storePath)) as string
   const idPath = storePath.slice(storePath.indexOf(".") + 1)
   const dispatch = useDispatch()
   const setValue = (value: string) => {
      dispatch(dispatchAction({ path: idPath, value }))
   }

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