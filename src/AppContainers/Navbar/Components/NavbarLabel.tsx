import { Link, useLocation } from "react-router-dom"
import { MdSubdirectoryArrowRight } from 'react-icons/md'


const NavbarLabel = () => {
   const { pathname } = useLocation()
   const firstSlash = pathname.indexOf('/', 1)
   const isNestedPath = firstSlash !== -1
   const mainPath = isNestedPath ? pathname.slice(1, firstSlash) : pathname.slice(1)
   return (
      <div className="frc g-4.">
         <h1 className="tcap tf-app-semibold ts-24.">
            {mainPath || 'Dashboard'}
         </h1>
         {isNestedPath && (
            <Link to={`/${mainPath}`} className="tw-base-action-icon h-32. w-32. mt-3. h:bg-input-bg-white br-6." >
               <MdSubdirectoryArrowRight className="rotate-180 -translate-x-2 translate-y-1" />
            </Link>
         )}
      </div>
   )
}
export default NavbarLabel