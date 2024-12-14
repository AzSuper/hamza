import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Landing from "./pages/Landing.jsx";
import Nobels from "./pages/Nobels.jsx";
import Portofolio from "./pages/Portofolio.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Landing />
    <Nobels />
    <Portofolio />
    <Contact />
    <Footer />
  </StrictMode>
);
