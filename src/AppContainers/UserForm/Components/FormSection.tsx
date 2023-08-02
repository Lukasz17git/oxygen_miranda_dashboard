

const FormSection = ({ label, children }: { label: string, children: React.ReactNode }) => {
   return (
      <div className="my-20. fc g-8.">
         <b className="tf-app-semibold tc-text-dark-393939">{label}</b>
         <div className="fw g-16.">
            {children}
         </div>
      </div>
   )
}
export default FormSection