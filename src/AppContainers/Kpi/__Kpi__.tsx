import { tw } from "tailwind-multi-class"

type Props = {
   Icon: ({ className }: { className: string }) => JSX.Element,
   number: number,
   text: string,
   iconClassName?: string
}

const Kpi = ({ Icon, number, text, iconClassName }: Props) => {
   return (
      <div className={tw("p-16. w-100% h-100% frc bg-fff br-12. g-16. s-card", { dark: "bg-dark-mode-black" })}>
         <div className={tw(
            "fs0 h-64. w-64. frcc br-8. bg-red-pastel group h:bg-red-main h:pointer",
            { dark: "bg-red-main/10 h:bg-red-main/80" }
         )}>
            <Icon className={`fill-red-main group-hover:fill-app-bg-white ${iconClassName}`} />
         </div>
         <div className="fcnb h-100% oh">
            <strong className={tw("tf-app-semibold tc-text-dark ts-28.", { dark: "tc-app-bg-white" })}> {number}</strong>
            <div className={tw("tf-app-light tc-text-grey-darker ts-14.", { dark: "tc-text-silver" })}> {text}</div>
         </div >
      </div >
   )
}

export default Kpi