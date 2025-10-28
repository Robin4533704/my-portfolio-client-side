import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout ";
import Home from "../Homepage/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contract";

;


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <AboutMe/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/skills",
        element: <Skills/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    
      
    ],
  },
]);

export default router;
