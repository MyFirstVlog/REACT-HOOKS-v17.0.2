import { AboutPage } from "../AboutPage";
import { LoginPage } from "../LoginPage";
import { MainApp } from "../MainApp";
import { HomePage } from "../HomePage";


export const getRoutes = () => createBrowserRouter([
    {
      path: "/",
      element: <MainApp />
    },
    {
      path: "/about",
      element: <AboutPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/home",
      element: <HomePage />
    },
  ]);