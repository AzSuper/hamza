import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faPinterest,
  faTwitter,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <img
            src="logo-black.svg"
            alt=""
            srcset=""
            style={{ width: "160px" }}
          />
        </div>
        <div className="social">
          <h3 className="soc">WE ARE SOCIAL</h3>
          <div className="social-icons">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faLinkedin}
              size="2x"
              aria-hidden="true"
            />
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faPinterest}
              size="2x"
              aria-hidden="true"
            />
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faTwitter}
              size="2x"
              aria-hidden="true"
            />
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faReddit}
              size="2x"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="copyright">
          <h3>
            © 2024 made by{" "}
            <span style={{ color: "#800020" }}>Mohammad Abo Zamel</span> All
            Right Reserved
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
