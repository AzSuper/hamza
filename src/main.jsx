import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Hamza from "./Hamza";
import NobelDetail from "./pages/NobelDetail";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hamza />} />
        <Route path="/Nobel/:category" element={<NobelDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
