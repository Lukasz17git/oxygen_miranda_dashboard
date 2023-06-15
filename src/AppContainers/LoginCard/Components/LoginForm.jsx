import { createContext, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { tw } from "tailwind-multi-class"
import wait from '../../../Utils/wait'
import { useDispatch } from "react-redux"
import { authenticateAction } from "../../../Store/RootSlices/uiSlice"

export const LoginContext = createContext(null)

const loginReducer = (state, { type, payload }) => {
   if (type === 'email') return { ...state, email: payload }
   if (type === 'password') return { ...state, password: payload }
   if (type === 'isPending') return { ...state, isPending: !state.isPending }
   return state
}

const initialReducerState = { email: '', password: '', isPending: false }

const LoginForm = ({ children }) => {

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [{ email, password, isPending }, dispatchState] = useReducer(loginReducer, initialReducerState)

   const initialContextLoginValue = {
      email,
      setEmail: (e) => dispatchState({ type: 'email', payload: e.target.value }),
      password,
      setPassword: (e) => dispatchState({ type: 'password', payload: e.target.value }),
      isPending,
      toggleIsPending: () => dispatchState({ type: 'isPending' })
   }

   const handleLogin = async (e) => {
      e.preventDefault()

      if (!email || !password) return

      try {
         initialContextLoginValue.toggleIsPending()

         await wait(200)

         if (password.length !== 3) throw 'wrong credentials'

         dispatch(authenticateAction())

         navigate("/")

      } catch (error) {
         alert('wrong credentials, try with a password of length 3')
      } finally {
         initialContextLoginValue.toggleIsPending()
      }
   }

   return (
      <LoginContext.Provider value={initialContextLoginValue}>
         <form
            className={tw(
               'pos-r p-32px s-profile br-16px max-w-340px fccc g-12px bg-card-bg ',
               'bg-gradient-to-t from-card-gradient/0 via-card-gradient/5 to-card-gradient/20',
               { dark: 'bc-card-bc--d bw-1px' }
            )}
            onSubmit={handleLogin}
         >
            {children}
         </form>
      </LoginContext.Provider>

   )
}
export default LoginForm