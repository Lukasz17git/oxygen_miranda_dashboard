import CommentsSimplified from "../AppContainers/Comment/CommentsSimplified"
import ReviewsTable from "../AppContainers/Table/ReviewsTable"


const Reviews = () => {
   return (
      <div className="h-100% grid w-100% grid-cols-1 grid-rows-contact">
         <CommentsSimplified />
         <ReviewsTable />
      </div>
   )
}

export default Reviews