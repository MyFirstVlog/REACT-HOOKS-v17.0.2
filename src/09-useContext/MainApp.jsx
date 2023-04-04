import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter,  Outlet, Link  } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';


export const MainApp = () => {
  const routerDom = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "about",
      element: <AboutPage />
    },
    {
      path: "login",
      element: <LoginPage />
    },
    {
      path: "/*",
      element: <Navigate to={"/about"} />
    },
  ]);

  return (
    <>
        <h1>MainApp</h1>
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/login`}>Login</Link>
        <hr />
        <RouterProvider router={routerDom } />
    </>
  )
}
