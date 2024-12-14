import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Tracks the active menu item
  const MenuRef = useRef(null);

  const sections = [
    { id: "home", label: "Home" },
    { id: "nobels", label: "Nobels" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    if (MenuRef.current) {
      MenuRef.current.classList.toggle("open");
    }
  };

  const handleMenuClick = (index) => {
    setActiveIndex(index); // Update the active menu item
    const section = document.getElementById(sections[index].id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Loop through sections to find the currently visible one
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          if (top >= -0.5 * height && top <= 0.5 * height) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="container">
        <img src="logo.svg" alt="Logo" className="logoNav" />
        <div className="nav-content">
          <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
          <ul className="navMenu" ref={MenuRef}>
            {sections.map((section, index) => (
              <li
                key={section.id}
                className={`link ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleMenuClick(index)}
              >
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
