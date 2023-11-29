/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/Notfound";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Services from "../pages/Services";
import SingleCarInfo from "../pages/SingleCarInfo";
import Vahicles from "../pages/Vahicles";
import PrivacyPolicy from "../pages/Privacy";
import TermsAndConditions from "../pages/TermsCondition";
import BookNow from "../pages/BookNow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
  {
    path: "vehicles",
    element: <Vahicles />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "/limo-services",
    element: <Services />,
  },
  {
    path: "/terms-condition",
    element: <TermsAndConditions />,
  },
  {
    path: "car_details/:id",
    element: <SingleCarInfo />,
  },
  {
    path: "book-now",
    element: <BookNow />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
