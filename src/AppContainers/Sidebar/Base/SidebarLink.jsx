import { NavLink } from "react-router-dom"


const SidebarLink = ({ Icon, href, text, iconClassName }) => {

   return (
      <NavLink to={href}>
         {({ isActive }) => (
            <div className={`min-h-40px pl-32px frc g-16px py-8px pos-r ${isActive ? '' : 'h:bg-green-pastel/50'}`}>
               <Icon className={`${iconClassName} ${isActive ? 'fill-svg-red-E23428' : 'fill-svg-green-799283'}`} />
               <b className={`ts-18px ${isActive ? 'tf-app-semibold tc-text-red-E23428' : 'tc-text-green-799283 tf-app-regular'}`}>{text}</b>
               {isActive && <div className="pos-a h-100% w-4px brr-5px bg-bg-red-E23428 l-0"></div>}
            </div>
         )}
      </NavLink>
   )
}

export default SidebarLink