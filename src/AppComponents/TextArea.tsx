import { tw } from "tailwind-multi-class"


const TextArea = (props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => {
   return (
      <textarea
         {...props}
         className={tw(
            "block bc-input-main-bc bw-1. px-8. py-6. br-4.",
            "w-100% h-72. ts-15. hf:bw-2. hf:os-none"
         )}
      />
   )
}

export default TextArea