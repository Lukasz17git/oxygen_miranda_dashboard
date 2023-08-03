import { createContext, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { tw } from "tailwind-multi-class"
import { authenticateAdminThunk } from '../../../Store/Slices/Users/adminSlice'
import { useTypedDispatch } from '../../../Store/store'

type LoginState = {
   email: string,
   password: string,
   isPending: boolean,
}
type LoginHandlers = {
   setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void,
   setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void,
   toggleIsPending: () => void
}

type LoginContext = LoginState & LoginHandlers

export const LoginContext = createContext<LoginContext>(null!)

type LoginReducer = { type: 'email', payload: string } | { type: 'password', payload: string } | { type: 'isPending' }

const loginReducer = (state: LoginState, action: LoginReducer) => {
   if (action.type === 'email') return { ...state, email: action.payload }
   if (action.type === 'password') return { ...state, password: action.payload }
   if (action.type === 'isPending') return { ...state, isPending: !state.isPending }
   return state
}

const initialReducerState = { email: '', password: '', isPending: false }

const LoginForm = ({ children }: { children: React.ReactNode }) => {

   const dispatch = useTypedDispatch()
   const navigate = useNavigate()

   const [{ email, password, isPending }, dispatchState] = useReducer(loginReducer, initialReducerState)

   const initialContextLoginValue: LoginContext = {
      email,
      setEmail: (e) => dispatchState({ type: 'email', payload: e.target.value }),
      password,
      setPassword: (e) => dispatchState({ type: 'password', payload: e.target.value }),
      isPending,
      toggleIsPending: () => dispatchState({ type: 'isPending' })
   }

   const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault()

      if (!email || !password) return

      try {
         initialContextLoginValue.toggleIsPending()

         const res = await dispatch(authenticateAdminThunk({ email, password }))
         if (res.payload) navigate("/")

      } catch (error) {
         alert('wrong credentials')
      } finally {
         initialContextLoginValue.toggleIsPending()
      }
   }

   return (
      <LoginContext.Provider value={initialContextLoginValue}>
         <form
            className={tw(
               'pos-r p-32. s-profile br-16. max-w-340. fccc g-12. bg-card-bg ',
               'bg-gradient-to-t from-card-gradient/0 via-card-gradient/5 to-card-gradient/20',
               { dark: 'bc-card-bc--d bw-1.' }
            )}
            onSubmit={handleLogin}
         >
            {children}
         </form>
      </LoginContext.Provider>

   )
}
export default LoginForm