import { RiDeleteBin4Fill } from "react-icons/ri"
import Button from "../../AppComponents/Button"
import { TiTick } from "react-icons/ti"


const BottomButtons = () => {
   return (
      <div className="frca">
         <Button className="pos-r bg-button-red-pastel-FFEDEC tc-text-red-E23428">
            <RiDeleteBin4Fill className="scale-65 fs0 pb-2." />
            <span className="pl-2. pr-8.">Delete</span>
         </Button>
         <Button className="pos-r">
            <TiTick className="fs0 pb-2." />
            <span className="pl-2. pr-8.">Save</span>
         </Button>
      </div>
   )
}
export default BottomButtons