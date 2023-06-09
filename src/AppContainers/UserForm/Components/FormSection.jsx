

const FormSection = ({ label, children }) => {
   return (
      <div className="my-20px fc g-8px">
         <b className="tf-app-semibold tc-text-dark-393939">{label}</b>
         <div className="fw g-16px">
            {children}
         </div>
      </div>
   )
}
export default FormSection