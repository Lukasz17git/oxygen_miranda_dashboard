import { useState } from "react"
import Input from "../../AppComponents/Input"
import { useNavigate } from "react-router-dom"



const LoginCard = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigate = useNavigate()
   const handleLogin = (e) => {
      e.preventDefault()
      if (!email || !password) return
      localStorage.setItem('isAuthenticated', Date.now() + 30 * 1000)
      navigate("/")
   }

   const lightModeFormClass = "pos-r p-32 s-profile br-16 max-w-340 fccc g-12 bg-fff bg-gradient-to-t from-green-pastel/0 via-green-pastel/5 to-green-pastel/20"
   const darkModeFormClass = 'dark:bg-dark-mode-black dark:bc-text-grey dark:bw-1'

   return (
      <form
         className={`${lightModeFormClass} ${darkModeFormClass}`}
         onSubmit={handleLogin}
      >
         <h1 className="ts-32 tf-app-semibold tc-green-dark tc lh-1.3em dark:tc-green-light">
            Dashboard Access
         </h1>
         <div className="fc w-100%">
            <b className="tf-app-semibold tc-text-dark my-12 dark:tc-green-light">Enter your credentials:</b>
            <Input
               wrapperClassName="w-100%"
               required
               type="email"
               label="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)} />
            <Input
               wrapperClassName="w-100% my-24"
               required
               label="Password"
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)} />
         </div>
         <input
            className="tw-base-button w-100% cursor-pointer h:bg-green-dark h:tc-fff dark:bg-dark-green dark:tc-app-bg-white dark:h:bc-green-light/60"
            value='Login'
            required
            type="submit" />
      </form>
   )
}
export default LoginCard