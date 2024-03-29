import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./App.tsx";
import Imprint from "./Imprint.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/imprint',
        element: <Imprint />,
    }

], {
    basename: '/prevery-de.github.io/',
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
