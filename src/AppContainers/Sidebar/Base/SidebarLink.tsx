import { NavLink } from "react-router-dom"

type TSidebarLink = {
   Icon: (props: any) => JSX.Element,
   href: string,
   text: string,
   iconClassName?: string
}
const SidebarLink = ({ Icon, href, text, iconClassName }: TSidebarLink) => {

   return (
      <NavLink to={href}>
         {({ isActive }) => (
            <div className={`min-h-40. pl-32. frc g-16. py-8. pos-r ${isActive ? '' : 'h:bg-green-pastel/50'}`}>
               <Icon className={`${iconClassName ?? ''} ${isActive ? 'fill-svg-red-E23428' : 'fill-svg-green-799283'}`} />
               <b className={`ts-18. ${isActive ? 'tf-app-semibold tc-text-red-E23428' : 'tc-text-green-799283 tf-app-regular'}`}>{text}</b>
               {isActive && <div className="pos-a h-100% w-4. brr-5. bg-bg-red-E23428 l-0"></div>}
            </div>
         )}
      </NavLink>
   )
}

export default SidebarLink