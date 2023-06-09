import { useContext } from "react"
import Input from "../../../AppComponents/Input"
import { LoginContext } from "./LoginForm"


const Password = () => {

   const { password, setPassword } = useContext(LoginContext)

   return (
      <Input
         wrapperClassName="w-100% my-24px"
         required
         label="Password"
         type="password"
         value={password}
         onChange={setPassword} />
   )
}
export default Password