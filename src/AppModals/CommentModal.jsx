import ActionIcon from "../AppComponents/ActionIcon"
import Img from "../AppComponents/Img"
import comments from "../JsonData/comments"
import { IoClose } from 'react-icons/io5'
import Button from "../AppComponents/Button"
import { TiTick } from "react-icons/ti"
import { RiDeleteBin4Fill } from 'react-icons/ri'


const CommentModal = ({ index, closeModal }) => {

   const comment = comments[index]

   return (
      <div className="pos-f z-1 transform-to-center bg-fff s-profile p-24 pb-28 bc-color-separator bw-1 fc w-400 br-12">
         <div className="frc g-16">
            <Img src={comment.client.photo || '/CriticalIcons/person.svg'} className="h-48 w-48 cover" />
            <div className="fcnb h-100% py-8">
               <b className="tf-app-semibold tc-text-black">{comment.client.name}</b>
               <q className="tf-app-light ts-14 tc-text-grey">{comment.email}</q>
               <q className="tf-app-light ts-14 tc-text-grey">{comment.phone}</q>
            </div>
            <ActionIcon onClick={closeModal} className="ml-a h:bg-app-bg-white br-6">
               <IoClose className="scale-120 fill-text-dark" />
            </ActionIcon>
         </div>
         <p className="tc-text-grey-darker tf-app-regular px-6 ts-15 pt-12 pb-20">{comment.comment}</p>
         <div className="frca">
            <Button className="pos-r bg-red-pastel tc-red-main">
               <RiDeleteBin4Fill className="scale-65 fs0 pb-2" />
               <span className="pl-2 pr-8">Delete</span>
            </Button>
            <Button className="pos-r">
               <TiTick className="fs0 pb-2" />
               <span className="pl-2 pr-8">Save</span>
            </Button>
         </div>
      </div>
   )
}

export default CommentModal