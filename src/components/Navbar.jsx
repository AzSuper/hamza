import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Tracks the active menu item
  const MenuRef = useRef(null);

  const toggleMenu = () => {
    if (MenuRef.current) {
      MenuRef.current.classList.toggle("open");
    }
  };

  const handleMenuClick = (index) => {
    setActiveIndex(index); // Update the active menu item
  };

  return (
    <div className="navbar">
      <div className="container">
        <img src="assets/logo.svg" alt="Logo" className="logoNav" />
        <div className="nav-content">
          <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
          <ul className="navMenu" ref={MenuRef}>
            {['Home', 'Services', 'Portfolio', 'About', 'Pricing', 'Contact'].map((item, index) => (
              <li
                key={index}
                className={`link ${activeIndex === index ? 'active' : ''}`} // Add the active class dynamically
                onClick={() => handleMenuClick(index)} // Update activeIndex on click
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
