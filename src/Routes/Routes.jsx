import {
    createBrowserRouter,
    
   } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";

   const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        // {
        //   path: "Login",
        //   element: <Login/>,
        // },
      ],
    },
   ]);
   export default router;
   
   