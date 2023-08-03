import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import createRouter from './Router'
import { Provider } from 'react-redux'
import "./Styles/Input.css"
import "./Styles/Select.css"
import "./Styles/App.css"
import { store } from './Store/store.ts'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Error from './Error/Error.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <DndProvider backend={HTML5Backend}>
            <RouterProvider router={createRouter(store)} />
            {/** MODALS */}
            <Error />
         </DndProvider>
      </Provider>
   </React.StrictMode>,
)
