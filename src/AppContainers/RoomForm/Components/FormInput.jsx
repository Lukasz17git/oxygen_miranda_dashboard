import Input from "../../../AppComponents/Input"


const FormInput = ({ ...props }) => {
   return (
      <Input
         {...props}
         className="!bw-1px !bc-border-silver-EBEBEB"
         labelClassName="!tc-text-dark-393939"
      />
   )
}
export default FormInput