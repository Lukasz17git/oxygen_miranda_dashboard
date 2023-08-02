import { useTypedSelector } from "../../../Store/store"


const RoomId = () => {
   const id = useTypedSelector(state => {
      const room = state.form
      return room?._id
   })
   return (
      <q className="ts-14. tc-text-green-799283">{id || ''}</q>
   )
}
export default RoomId