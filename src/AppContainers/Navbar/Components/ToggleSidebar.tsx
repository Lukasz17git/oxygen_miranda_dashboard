import ActionIcon from '../../../AppComponents/ActionIcon'
import SvgToggleSidebar from '../../../Svgs/SvgToggleSidebar'
import { useTypedDispatch, useTypedSelector } from '../../../Store/store'
import { toggleSidebarAction } from '../../../Store/RootSlices/uiSlice'
import { tw } from 'tailwind-multi-class'

const ToggleSidebar = () => {
   const isSidebar = useTypedSelector(state => state.ui.sidebar)
   const dispatch = useTypedDispatch()
   const toggleSidebar = () => dispatch(toggleSidebarAction())
   return (
      <ActionIcon
         className='h:bg-app-bg-white br-8.'
         onClick={toggleSidebar}>
         <SvgToggleSidebar className={tw(
         "scale-y-130 -translate-x-1. fs0 stroke-text-dark", isSidebar ? '-scale-x-120' : 'scale-x-120'
         )} />
      </ActionIcon>
   )
}


export default ToggleSidebar