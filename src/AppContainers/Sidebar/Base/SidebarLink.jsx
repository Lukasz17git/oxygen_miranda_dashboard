import { NavLink } from "react-router-dom"


const SidebarLink = ({ Icon, href, text, iconClassName }) => {

   return (
      <NavLink to={href}>
         {({ isActive }) => (
            <div className={`min-h-40 pl-32 frc g-16 py-8 pos-r ${isActive ? '' : 'h:bg-green-pastel/30 '}`}>
               <Icon className={`${iconClassName} ${isActive ? 'fill-red-main' : 'fill-green-text'}`} />
               <b className={`ts-18 ${isActive ? 'tf-app-semibold tc-red-main' : 'tc-green-text tf-app-regular'}`}>{text}</b>
               {isActive && <div className="pos-a h-100% w-4 brr-5 bg-red-main l-0"></div>}
            </div>
         )}
      </NavLink>
   )
}

export default SidebarLink