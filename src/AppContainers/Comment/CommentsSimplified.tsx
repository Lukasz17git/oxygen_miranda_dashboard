import { useState } from "react"
import Comment from "./Components/Comment"
import comments from "../../JsonData/comments"
import { useKeenSlider } from "keen-slider/react"
import CommentModal from "../../AppModals/CommentModal"
import LeftButton from "./Components/LeftButton"
import RightButton from "./Components/RightButton"
import { useTypedSelector } from "../../Store/store"


const CommentsSimplified = () => {
   const maxReviews = 20
   const reviewsArray = useTypedSelector(state => state.reviews.map((_, index) => index).slice(maxReviews * -1))

   const [sliderRef, instanceRef] = useKeenSlider({
      mode: "snap",
      slides: {
         perView: 'auto',// Math.trunc(window.innerWidth / 320 - 1),
         spacing: 15
      },
      defaultAnimation: {
         duration: 1000
      },
      slideChanged(props) {
         const max = props.track.details.maxIdx
         const current = props.track.details.abs
         console.log(current)
         setHidePrev(current === 0 ? true : false)
         setHideNext(current === max ? true : false)

      }
   })
   const nextSlide = () => instanceRef.current?.next()
   const prevSlide = () => instanceRef.current?.prev()
   const [hidePrev, setHidePrev] = useState(true)
   const [hideNext, setHideNext] = useState(comments.length < 4)

   const [commentModalIndex, setCommentModalIndex] = useState<number | null>(null)

   return (
      <div className="pos-r p-16. h-fit">
         <div ref={sliderRef} className="keen-slider py-8. frc oh mx-4. cursor-grab">
            {reviewsArray.map((_, index) => (
               <Comment className='bg-bg-white-fff' key={index} index={index} openCommentModal={() => setCommentModalIndex(index)} />
            ))}
         </div>
         <LeftButton hidePrev={hidePrev} prevSlide={prevSlide} />
         <RightButton hideNext={hideNext} nextSlide={nextSlide} />
         {commentModalIndex !== null && <CommentModal index={commentModalIndex} closeModal={() => setCommentModalIndex(null)} />}
      </div>
   )
}
export default CommentsSimplified