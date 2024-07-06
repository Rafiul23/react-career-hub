import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Componnents/Roots';
import Home from './Componnents/Home';
import Jobs from './Componnents/Jobs';
import AppliedJobs from './Componnents/AppliedJobs';
import Blogs from './Componnents/Blogs';
import Statistics from './Componnents/Statistics';
import ErrorPage from './Componnents/ErrorPage';
import JobDetails from './Componnents/JobDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('../public/data/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
