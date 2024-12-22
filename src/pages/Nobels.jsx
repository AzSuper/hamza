import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import LazyLoad from "react-lazyload";
import { useParams } from "react-router";
import { nobelSections } from "../constant";

const Nobels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPath = useParams();
  const Section = nobelSections;
  const [sliderButton, setSliderButton] = useState(0);

  const handleClickSlider = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Section.length - 1 ? 0 : prevIndex + 1
      );
      setSliderButton((prevIndex) =>
        prevIndex === Section.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [Section.length]);

  return (
    <section className="Nobels" id="nobels">
      <div className="container">
        <div className="title">
          <h1
            className="nobel-title-1"
            style={{ color: Section[currentIndex].color }}
          >
            Nobel
          </h1>
          <h1
            className="nobel-title-2"
            style={{
              WebkitTextStroke: `2px ${Section[currentIndex].color}`, // Set stroke width and color
            }}
          >
            {Section[currentIndex].title}
          </h1>
          <h1 className="since" style={{ color: Section[currentIndex].color }}>
            Since {Section[currentIndex].year}
          </h1>
        </div>
        <div className="nobel-desc">
          {/* <LazyLoad height={200} offset={100}> */}
          <img
            alt={"model"}
            src={Section[currentIndex].image}
            aria-placeholder={"model"}
            className={"nobel-model"}
            style={{ width: Section[currentIndex].width }}
          />
          {/* </LazyLoad> */}
          <div className="desc">
            <p style={{ color: Section[currentIndex].color }}>
              {Section[currentIndex].descFirst}
            </p>
            <p style={{ color: Section[currentIndex].color }}>
              {Section[currentIndex].descSecond}
            </p>
          </div>
        </div>
        <div className="action">
          <div className="ratio">
            <div className="btn">
              <div
                className="num"
                style={{
                  border: `2px solid ${Section[currentIndex].color}`,
                  color: Section[currentIndex].color,
                }}
              >
                <p>+{Section[currentIndex].products}</p>
              </div>
              <div className="info">
                <p style={{ color: Section[currentIndex].color }}>
                  {Section[currentIndex].proDesc}
                </p>
              </div>
            </div>
            <div className="btn">
              <div
                className="num"
                style={{
                  border: `2px solid ${Section[currentIndex].color}`,
                  color: Section[currentIndex].color,
                }}
              >
                <p>+{Section[currentIndex].customers}</p>
              </div>
              <div className="info">
                <p style={{ color: Section[currentIndex].color }}>
                  {Section[currentIndex].custDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connect">
        <h2
          style={{
            color: Section[currentIndex].color,
            marginBottom: "8px",
          }}
        >
          Glad To be Your Supplier !
        </h2>
        <Button
          element={Section[currentIndex]}
          title="Explore More "
          path={`/Nobel/${Section[currentIndex].title}`}
        />
      </div>
      <div className="controls">
        {Section.map((section, index) => (
          <button
            key={index}
            id={`button-${index}`}
            style={{
              backgroundColor:
                sliderButton === index // Compare sliderButton directly with index
                  ? Section[index]?.color || "#fefefe" // Use the color for the matching index
                  : "#817b7c99", // Default color for non-active buttons
            }}
            onClick={() => {
              handleClickSlider(index);
              setSliderButton(index); // Set the button index directly
            }}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Nobels;
