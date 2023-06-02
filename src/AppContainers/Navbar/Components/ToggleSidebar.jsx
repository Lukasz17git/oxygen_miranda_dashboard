import ActionIcon from '../../../AppComponents/ActionIcon'
import SvgToggleSidebar from '../../../Svgs/SvgToggleSidebar'
import { useTypedDispatch, useTypedSelector } from '../../../Store/store'
import { toggleSidebarAction } from '../../../Store/Slices/layoutSlice'

const ToggleSidebar = () => {
   const isSidebar = useTypedSelector(state => state.layout.sidebar)
   const dispatch = useTypedDispatch()
   const toggleSidebar = () => dispatch(toggleSidebarAction())
   return (
      <ActionIcon
         className='h:bg-app-bg-white br-8 dark:h:bg-dark-hover'
         onClick={toggleSidebar}>
         <SvgToggleSidebar className={`scale-y-130 -translate-x-1 fs0 stroke-text-dark dark:stroke-dark-green ${isSidebar ? '-scale-x-120' : 'scale-x-120'}`} />
      </ActionIcon>
   )
}


export default ToggleSidebar