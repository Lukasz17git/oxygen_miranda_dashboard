import { tw } from "tailwind-multi-class"


const Graph = () => {
   return (
      <div className={tw(
         "h-320px w-100% frcc tf-app-extrabold ts-18px col-span-2 bg-fff s-card br-16px",
         { dark: "bg-dark-mode-black dark:tc-dark-white" }
      )}>
         Graph
      </div>
   )
}
export default Graph