import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/home/Home";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/error/Error";
import Success from "../pages/success/Success";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);
