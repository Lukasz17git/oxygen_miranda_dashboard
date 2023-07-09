import { RiDeleteBin4Fill } from "react-icons/ri"
import Button from "../../AppComponents/Button"
import { TiTick } from "react-icons/ti"


const BottomButtons = () => {
   return (
      <div className="frca">
         <Button className="pos-r bg-button-red-pastel-FFEDEC tc-text-red-E23428">
            <RiDeleteBin4Fill className="scale-65 fs0 pb-2px" />
            <span className="pl-2px pr-8px">Delete</span>
         </Button>
         <Button className="pos-r">
            <TiTick className="fs0 pb-2px" />
            <span className="pl-2px pr-8px">Save</span>
         </Button>
      </div>
   )
}
export default BottomButtons