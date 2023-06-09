import { tw } from "tailwind-multi-class"


const ModalLayout = ({ children }) => {
   return (
      <div className={tw(
         "pos-f z-1 transform-to-center p-24px pb-28px bw-1px",
         "bg-bg-white-fff s-profile bc-border-silver-EBEBEB fc g-16px w-400px br-12px"
      )}>
         {children}
      </div>
   )
}
export default ModalLayout