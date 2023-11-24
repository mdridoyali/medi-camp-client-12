import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../Pages/Home';
import AvailableCamp from "../Pages/AvailableCamp";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'available-camp',
          element: <AvailableCamp/>
        },
        {
          path: 'contact-us',
          element: <ContactUs/>
        },
      ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
  ]);

  export default router