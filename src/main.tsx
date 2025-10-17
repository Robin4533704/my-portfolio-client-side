import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from "./Componets/root/hook/Router.jsx";
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={Router} />
  </StrictMode>,
)
