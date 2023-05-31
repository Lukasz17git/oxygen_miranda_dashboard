import ActionIcon from "../../../AppComponents/ActionIcon"
import SvgToggleTheme from '../../../Svgs/SvgToggleTheme'


const ThemeMode = () => {

   const switchThemeMode = () => console.log('dark')

   return (
      <ActionIcon onClick={switchThemeMode} className="pos-r h:bg-app-bg-white br-8">
         <SvgToggleTheme className="fill-text-dark/95 scale-105 " />
      </ActionIcon>
   )
}
export default ThemeMode