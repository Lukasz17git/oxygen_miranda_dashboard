import { useRouteError, isRouteErrorResponse } from "react-router-dom"

const ErrorPage = () => {
   const error = useRouteError()

   let errorMessage: string;

   if (isRouteErrorResponse(error)) {
      // error is type `ErrorResponse`
      errorMessage = error.error?.message || error.statusText;
   } else if (error instanceof Error) {
      errorMessage = error.message;
   } else if (typeof error === 'string') {
      errorMessage = error;
   } else {
      console.error(error);
      errorMessage = 'Unknown error';
   }

   console.log('error', error)
   return (
      <div>
         <h2>Error!</h2>
         <div>
            <p>There was an error in the app</p>
         </div>
         <div>
            <p>{errorMessage}</p>
         </div>
      </div>
   )
}
export default ErrorPage