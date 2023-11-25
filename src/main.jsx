import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from 'react-hot-toast';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <Toaster/>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
