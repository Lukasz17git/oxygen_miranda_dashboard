import { tw } from "tailwind-multi-class"
import Email from "./Components/Email"
import Password from "./Components/Password"
import LoginForm from "./Components/LoginForm"
import Submit from "./Components/Submit"


const LoginCard = () => {

   return (
      <LoginForm>
         <h1 className={tw("ts-32px tf-app-semibold tc-green-dark tc lh-1.3em", { dark: "tc-green-light" })}>
            Dashboard Access
         </h1>
         <div className="fc w-100%">
            <b className={tw("tf-app-semibold tc-text-dark my-12px", { dark: "tc-green-light" })}>
               Enter your credentials:
            </b>
            <Email />
            <Password />
         </div>
         <Submit />
      </LoginForm>
   )
}

export default LoginCard