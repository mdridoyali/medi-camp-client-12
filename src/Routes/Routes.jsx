import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../Pages/Home';
import AvailableCamp from "../Pages/AvailableCamp";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";
import OrganizerProfile from "../Pages/Dashboard/OrganizerProfile";
import AddCamp from "../Pages/Dashboard/AddCamp";


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
        path: 'dashboard',
        element: <Dashboard/>,
        children:[
            {
              path: 'organizer-profile',
              element: <OrganizerProfile/>
            },
            {
              path: 'add-a-camp',
              element: <AddCamp/>
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