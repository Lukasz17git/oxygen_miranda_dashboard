import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";

type StoreType = typeof initialState
const initialState = {
   modal: {
      id: '',
      data: null
   },
   admin: {
      name: ''
   }
}

const rootReducer = (state = initialState, action: { type: 'UPDATE_STORE', functionUpdate: (s: StoreType) => StoreType } | { type: 'RESET_STORE' }) => {
   if (action.type === 'UPDATE_STORE') return action.functionUpdate(state)
   if (action.type === 'RESET_STORE') return initialState
   return state
}

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


//Typings
// export type RootState = ReturnType<typeof store.getState>
// export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;