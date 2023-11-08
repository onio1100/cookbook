import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainOutlet from './components/MainOutlet.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet></MainOutlet>,
    children: [
    {
      path: "home",
      element: <Home></Home>,
    },
    {
      path:"recepie/:recepieName",
      element: <div>recepie</div>,
    },
    {
      path: "info",
      element: <div>info</div>,
    },
    {
      path: "*",
      element: <div>error</div>,
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
