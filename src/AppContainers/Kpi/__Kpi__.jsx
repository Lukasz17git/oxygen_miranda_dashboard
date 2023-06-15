import { tw } from "tailwind-multi-class"


const Kpi = ({ Icon, number, text, iconClassName }) => {
   return (
      <div className={tw("p-16px w-100% h-100% frc bg-fff br-12px g-16px s-card", { dark: "bg-dark-mode-black" })}>
         <div className={tw(
            "fs0 h-64px w-64px frcc br-8px bg-red-pastel group h:bg-red-main h:pointer",
            { dark: "bg-red-main/10 h:bg-red-main/80" }
         )}>
            <Icon className={`fill-red-main group-hover:fill-app-bg-white ${iconClassName}`} />
         </div>
         <div className="fcnb h-100% oh">
            <strong className={tw("tf-app-semibold tc-text-dark ts-28px", { dark: "tc-app-bg-white" })}> {number}</strong>
            <div className={tw("tf-app-light tc-text-grey-darker ts-14px", { dark: "tc-text-silver" })}> {text}</div>
         </div >
      </div >
   )
}

export default Kpi