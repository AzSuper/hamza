import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import LazyLoad from "react-lazyload";

const Nobels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nobelSections = [
    {
      id: "1",
      title: "Art",
      image: "assets/art_three.png",
      color: "#CBA135",
      year: "2001",
      descFirst:
        "It is considered one of the most important import and export companies in Damascus.",
      descSecond:
        "At HAMZA Group-Noble Chemist, we are a source of high-quality primary resources that go into the manufacture of oils, medicines, detergents and cosmetics.",
      products: "20",
      proDesc: "Raw Materiel we import.",
      customers: "40",
      custDesc: "Truly client trusts our Services.",
      width: "550px",
    },
    {
      id: "2",
      title: "Chemist",
      image: "assets/barel.png",
      color: "#50C878",
      year: "2001",
      descFirst:
        "It is considered one of the most important import and export companies in Damascus.",
      descSecond:
        "At HAMZA Group-Noble Chemist, we are a source of high-quality primary resources that go into the manufacture of oils, medicines, detergents and cosmetics.",
      products: "20",
      proDesc: "Raw Materiel we import.",
      customers: "40",
      custDesc: "Truly client trusts our Services.",
      width: "600px",
    },
    {
      id: "3",
      title: "Cotton",
      image: "assets/cotton_three.png",
      color: "#4169E1",
      year: "2001",
      descFirst:
        "It is considered one of the most important import and export companies in Damascus.",
      descSecond:
        "At HAMZA Group-Noble Chemist, we are a source of high-quality primary resources that go into the manufacture of oils, medicines, detergents and cosmetics.",
      products: "20",
      proDesc: "Raw Materiel we import.",
      customers: "40",
      custDesc: "Truly client trusts our Services.",
      width: "380px",
    },
  ];

  const [sliderButton, setSliderButton] = useState(0);

  const handleClickSlider = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === nobelSections.length - 1 ? 0 : prevIndex + 1
      );
      setSliderButton((prevIndex) =>
        prevIndex === nobelSections.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [nobelSections.length]);

  return (
    <section className="Nobels" id="nobels">
      <div className="container">
        <div className="title">
          <h1
            className="nobel-title-1"
            style={{ color: nobelSections[currentIndex].color }}
          >
            Nobel
          </h1>
          <h1
            className="nobel-title-2"
            style={{
              WebkitTextStroke: `2px ${nobelSections[currentIndex].color}`, // Set stroke width and color
            }}
          >
            {nobelSections[currentIndex].title}
          </h1>
          <h1
            className="since"
            style={{ color: nobelSections[currentIndex].color }}
          >
            Since {nobelSections[currentIndex].year}
          </h1>
        </div>
        <div className="nobel-desc">
          {/* <LazyLoad height={200} offset={100}> */}
          <img
            alt={"model"}
            src={nobelSections[currentIndex].image}
            aria-placeholder={"model"}
            className={"nobel-model"}
            style={{ width: nobelSections[currentIndex].width }}
          />
          {/* </LazyLoad> */}
          <div className="desc">
            <p style={{ color: nobelSections[currentIndex].color }}>
              {nobelSections[currentIndex].descFirst}
            </p>
            <p style={{ color: nobelSections[currentIndex].color }}>
              {nobelSections[currentIndex].descSecond}
            </p>
          </div>
        </div>
        <div className="action">
          <div className="ratio">
            <div className="btn">
              <div
                className="num"
                style={{
                  border: `2px solid ${nobelSections[currentIndex].color}`,
                  color: nobelSections[currentIndex].color,
                }}
              >
                <p>+{nobelSections[currentIndex].products}</p>
              </div>
              <div className="info">
                <p style={{ color: nobelSections[currentIndex].color }}>
                  {nobelSections[currentIndex].proDesc}
                </p>
              </div>
            </div>
            <div className="btn">
              <div
                className="num"
                style={{
                  border: `2px solid ${nobelSections[currentIndex].color}`,
                  color: nobelSections[currentIndex].color,
                }}
              >
                <p>+{nobelSections[currentIndex].customers}</p>
              </div>
              <div className="info">
                <p style={{ color: nobelSections[currentIndex].color }}>
                  {nobelSections[currentIndex].custDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connect">
        <h2
          style={{
            color: nobelSections[currentIndex].color,
            marginBottom: "8px",
          }}
        >
          Glad To be Your Supplier !
        </h2>
        <Button element={nobelSections[currentIndex]} title="Let's Contact" />
      </div>
      <div className="controls">
        {nobelSections.map((section, index) => (
          <button
            key={index}
            id={`button-${index}`}
            style={{
              backgroundColor:
                sliderButton === index // Compare sliderButton directly with index
                  ? nobelSections[index]?.color || "#fefefe" // Use the color for the matching index
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
