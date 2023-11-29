import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "./../components/navbar/Navbar";
const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
