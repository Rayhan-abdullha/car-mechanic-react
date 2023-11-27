/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/Notfound";
import ContactUs from "../pages/ContactUs";
import Vahecles from "../pages/Vahicles";
import About from "../pages/About";
import Services from "../pages/Services";
import SingleCarInfo from "../pages/SingleCarInfo";
import Vahicles from "../pages/Vahicles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/vahicles",
    element: <Vahicles />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/limo-services",
    element: <Services />,
  },
  {
    path: "/car_details/:id",
    element: <SingleCarInfo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
