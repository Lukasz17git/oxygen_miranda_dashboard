import { useContext } from "react"
import Input from "../../../AppComponents/Input"
import { LoginContext } from "./LoginForm"


const Password = () => {

   const { password, setPassword } = useContext(LoginContext)

   return (
      <Input
         wrapperClassName="w-100% my-24."
         required
         label="Password"
         type="password"
         value={password}
         onChange={setPassword}
         e2e-id="login-password"
      />
   )
}
export default Password