import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from "./Componets/root/hook/Router.jsx";
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme='light'>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </StrictMode>,
);
