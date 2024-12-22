import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import Button from "./Button";
import { nobelSections } from "../constant/index";
import { Navigate, useNavigate } from "react-router-dom";

const TopNobel = () => {
  const { category } = useParams(); // Extract 'category' from params
  const Elements = nobelSections;
  const [scrolled, setScrolled] = useState(false);
  const foundElement = Elements.find((item) => item.title == category);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [category, Elements]);

  console.log(foundElement);
  console.log(Element);
  console.log(category);
  return (
    <div className={`top-container ${scrolled ? "scrolled" : ""}`}>
      <div className="contentt">
        <img src={`/nobel${category}.png`} alt="" srcset="" />
        <Button title={"Get Back"} element={foundElement} path={`/`} />
      </div>
    </div>
  );
};

export default TopNobel;
