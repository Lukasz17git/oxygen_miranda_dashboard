import { useContext } from "react"
import Input from "../../../AppComponents/Input"
import { LoginContext } from "./LoginForm"


const Email = () => {

   const { email, setEmail } = useContext(LoginContext)

   return (
      <Input
         wrapperClassName="w-100%"
         required
         type="email"
         label="Email"
         value={email}
         onChange={setEmail}
         e2e-id="login-email"
      />
   )
}
export default Email