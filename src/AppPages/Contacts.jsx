import Comments from "../AppContainers/Comment/Comments"
import CommentsSimplified from "../AppContainers/Comment/CommentsSimplified"
import ContactsTable from "../AppContainers/Table/ContactsTable"


const Contacts = () => {
   return (
      <div className=" h-100% grid w-100% grid-cols-1 grid-rows-contact">
         <CommentsSimplified />
         <ContactsTable />
      </div>
   )
}

export default Contacts