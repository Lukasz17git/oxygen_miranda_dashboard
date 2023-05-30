import Img from "../../AppComponents/Img"
import comments from "../../JsonData/comments"


const Comment = ({ path, index }) => {

   const comment = comments[index]

   return (
      <div>
         <p></p>
         <div className="frc g-16">
            <Img src={comment.client.photo || '/CriticalIcons/person.svg'} className="h-32 w-32 cover" />
            <div className="fcnb h-100% py-8">
               <b className="tf-app-semibold tc-text-dark ts-20">{data.room.name}</b>
               <div className="frc g-12" >
                  <Img src={data.client.photo || '/CriticalIcons/person.svg'} className="h-32 w-32 cover" />
                  <b className="tf-app-semibold ts-14">{data.client.name}</b>
                  <q className="pl-4 tf-app-light ts-14 tc-text-dark">{timeAgo}</q>
               </div>
            </div>
            <div className={`px-12 min-h-40 min-w-40 frcc tc-white ml-a br-8 status-${[data.room.status]}`}>
               {days}
            </div>
         </div>
      </div>
   )
}
export default Comment