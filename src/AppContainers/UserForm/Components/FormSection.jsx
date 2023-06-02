

const FormSection = ({ label, children }) => {
   return (
      <div className="my-20 fc g-8">
         <b className="tf-app-semibold tc-text-dark">{label}</b>
         <div className="fw g-16">
            {children}
         </div>
      </div>
   )
}
export default FormSection