import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../Pages/Home';
import AvailableCamp from "../Pages/AvailableCamp";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";
import OrganizerProfile from "../Pages/Dashboard/OrganizerRoute/OrganizerProfile";
import AddCamp from "../Pages/Dashboard/OrganizerRoute/AddCamp";
import ManageCamp from "../Pages/Dashboard/OrganizerRoute/ManageCamp";
import ManageRegisteredCamp from "../Pages/Dashboard/OrganizerRoute/ManageRegisteredCamp";
import UpdateCamp from "../Pages/Dashboard/OrganizerRoute/UpdateCamp";
import ErrorPage from './../Components/ErrorPage';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
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
            {
              path: 'manage-camps',
              element: <ManageCamp/>
            },
            {
              path: 'manage-registered-camps',
              element: <ManageRegisteredCamp/>
            },
            {
              path: 'update-camp/:id',
              element: <UpdateCamp/>,
              loader: ({ params }) => fetch(`http://localhost:5000/camp/${params.id}`)
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