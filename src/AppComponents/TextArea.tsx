import { tw } from "tailwind-multi-class"


const TextArea = (props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => {
   return (
      <textarea
         {...props}
         className={tw(
            "block bc-input-main-bc bw-1px px-8px py-6px br-4px",
            "w-100% h-72px ts-15px hf:bw-2px hf:os-none"
         )}
      />
   )
}

export default TextArea