import { tw } from "tailwind-multi-class"
import { NestedStorePaths, StorePaths, selector, useTypedSelector } from "../Store/store"
import { useDispatch } from "react-redux"
import { updateFormValueAction } from "../Store/RootSlices/formSlice"

type TextAreaType<T extends StorePaths> = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
   path: T,
   fieldPath: NestedStorePaths<T>
}

const TextArea = <T extends StorePaths>({ path, fieldPath, ...props }: TextAreaType<T>) => {

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

   return (
      <textarea
         {...props}
         value={value}
         onChange={e => setValue(e.target.value)}
         className={tw(
            "block bc-input-main-bc bw-1px px-8px py-6px br-4px",
            "w-100% h-72px ts-15px hf:bw-2px hf:os-none"
         )}
      />
   )
}

export default TextArea