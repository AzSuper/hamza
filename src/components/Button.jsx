import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ title, element, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      className="custome-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? "#fefefe" : element.color,
        border: `3px solid ${element.color}`,
        backgroundColor: isHovered && element.color,
      }}
      onClick={() => navigate(path)}
    >
      {title}
      <svg
        width="33"
        height="26"
        viewBox="0 0 33 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5979 3.90424C19.4109 3.72426 19.2608 3.50722 19.1568 3.26607C19.0527 3.02492 18.9967 2.76459 18.9922 2.50062C18.9877 2.23665 19.0347 1.97445 19.1305 1.72966C19.2263 1.48486 19.3688 1.26249 19.5496 1.07581C19.7304 0.889127 19.9457 0.741958 20.1828 0.643082C20.4199 0.544205 20.6738 0.495648 20.9295 0.500305C21.1851 0.504963 21.4372 0.562739 21.6708 0.67019C21.9043 0.77764 22.1145 0.932562 22.2888 1.12571L32.4432 11.6107C32.7997 11.9794 33 12.479 33 13C33 13.521 32.7997 14.0207 32.4432 14.3893L22.2888 24.8743C22.1145 25.0674 21.9043 25.2224 21.6708 25.3298C21.4372 25.4373 21.1851 25.495 20.9295 25.4997C20.6738 25.5044 20.4199 25.4558 20.1828 25.3569C19.9457 25.258 19.7304 25.1109 19.5496 24.9242C19.3688 24.7375 19.2263 24.5151 19.1305 24.2703C19.0347 24.0255 18.9877 23.7634 18.9922 23.4994C18.9967 23.2354 19.0527 22.9751 19.1568 22.7339C19.2608 22.4928 19.4109 22.2757 19.5979 22.0958L26.5029 14.9659L1.90394 14.9659C1.39898 14.9659 0.914707 14.7588 0.557651 14.3901C0.200591 14.0214 -5.69184e-07 13.5214 -5.46392e-07 13C-5.23601e-07 12.4786 0.200592 11.9786 0.557651 11.6099C0.914707 11.2412 1.39898 11.0341 1.90394 11.0341L26.5029 11.0341L19.5979 3.90424Z"
          fill={isHovered ? "#fefefe" : element.color}
        />
      </svg>
    </button>
  );
};

export default Button;
