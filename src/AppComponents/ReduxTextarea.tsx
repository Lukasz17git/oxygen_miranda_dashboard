import { tw } from "tailwind-multi-class"
import { StorePaths, selector, useTypedSelector } from "../Store/store"
import { AnyAction } from "redux"
import { useDispatch } from "react-redux"

type TextAreaType = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
   storePath: StorePaths,
   dispatchAction: (v: unknown) => AnyAction
}

const TextArea = ({ storePath, dispatchAction, ...props }: TextAreaType) => {

   const value = useTypedSelector(selector(storePath)) as string
   const idPath = storePath.slice(storePath.indexOf(".") + 1)
   const dispatch = useDispatch()
   const setValue = (value: string) => {
      dispatch(dispatchAction({ path: idPath, value }))
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