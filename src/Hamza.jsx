import React from "react";
import Navbar from "./components/Navbar.jsx";
import Landing from "./pages/Landing.jsx";
import Nobels from "./pages/Nobels.jsx";
import Portofolio from "./pages/Portofolio.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

const Hamza = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Nobels />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Hamza;
