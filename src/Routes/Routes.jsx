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
import PrivetRoutes from "./PrivetRoutes";
import CampDetails from "../Pages/CampDetails";
import ParticipantProfile from "../Pages/Dashboard/ParticipantRoute/ParticipantProfile";
import RegisteredCamp from "../Pages/Dashboard/ParticipantRoute/RegisteredCamp";
import PaymentHistory from "../Pages/Dashboard/ParticipantRoute/PaymentHistory";
import Feedback from "../Pages/Dashboard/ParticipantRoute/Feedback";
import Payment from "../Pages/Dashboard/ParticipantRoute/Payment/Payment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'available-camp',
        element: <PrivetRoutes> <AvailableCamp /></PrivetRoutes>
      },
      {
        path: 'camp-details/:id',
        element: <PrivetRoutes> <CampDetails /></PrivetRoutes>
      },
      {
        path: 'contact-us',
        element: <ContactUs />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivetRoutes><Dashboard /></PrivetRoutes>,
    errorElement: <ErrorPage />,
    children: [
      // for Organizer 
      {
        path: 'organizer-profile',
        element: <OrganizerProfile />
      },
      {
        path: 'add-a-camp',
        element: <AddCamp />
      },
      {
        path: 'manage-camps',
        element: <ManageCamp />
      },
      {
        path: 'manage-registered-camps',
        element: <ManageRegisteredCamp />
      },
      {
        path: 'update-camp/:id',
        element: <UpdateCamp />,
        loader: ({ params }) => fetch(`http://localhost:5000/camp/${params.id}`)
      },
      // for Participant
      {
        path: 'participant-profile',
        element: <ParticipantProfile />
      },
      {
        path: 'registered-camps',
        element: <RegisteredCamp />
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />
      },
      {
        path: 'feedback',
        element: <Feedback />
      },
      {
        path: 'payment',
        element: <Payment />
      },
    ]
  },



  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

export default router