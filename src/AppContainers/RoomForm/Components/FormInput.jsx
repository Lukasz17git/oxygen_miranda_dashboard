import Input from "../../../AppComponents/Input"


const FormInput = ({ ...props }) => {
   return (
      <Input
         {...props}
         className="!bw-1 !bc-color-separator-grey"
         labelClassName="!tc-text-dark"
      />
   )
}
export default FormInput