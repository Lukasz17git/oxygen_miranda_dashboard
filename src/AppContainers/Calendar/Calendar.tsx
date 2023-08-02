import { tw } from "tailwind-multi-class"


const Calendar = () => {
   return (
      <div className={tw(
         "h-320. w-100% frcc tf-app-extrabold ts-18. col-span-2 s-card bg-bg-white-fff br-16.",
         { dark: "bg-dark-mode-black tc-dark-white" }
      )}>
         Calendar
      </div>
   )
}
export default Calendar