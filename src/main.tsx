import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import Router from './Router.tsx'
import { Provider } from 'react-redux'
import "./App.css"
import { store } from './Store/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={Router} />
      </Provider>
   </React.StrictMode>,
)
