import {
    createBrowserRouter,
    
   } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import News from "../Pages/News/News";

   const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: () => fetch('news.json')
        },
        {
            path: "/news/:id",
            element: <News/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
            path: "register",
            element: <Register/>,
          },
      ],
    },
   ]);
   export default router;
   
   