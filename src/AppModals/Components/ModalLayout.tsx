import { tw } from "tailwind-multi-class"


const ModalLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className={tw(
         "pos-f z-1 transform-to-center p-24. pb-28. bw-1.",
         "bg-bg-white-fff s-profile bc-border-silver-EBEBEB fc g-16. w-400. br-12."
      )}>
         {children}
      </div>
   )
}
export default ModalLayout