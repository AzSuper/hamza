import React, { useState } from "react";
import Button from "../components/Button";
const Nobels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nobelSections = [
    {
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
    },
    {
      title: "Chemist",
      image: "assets/chemest_three.png",
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
    },
    {
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
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex - 1 + nobelSections.length) % nobelSections.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % nobelSections.length);
  };

  return (
    <section className="Nobels">
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
          <div className="desc">
            <p style={{ color: nobelSections[currentIndex].color }}>{nobelSections[currentIndex].descFirst}</p>
            <p style={{ color: nobelSections[currentIndex].color }}>{nobelSections[currentIndex].descSecond}</p>
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
        <div className="controls">
          {/* <button onClick={handlePrevClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button> */}
        </div>
      </div>
      <div className="connect">
            <h2 style={{ color: nobelSections[currentIndex].color }}>Glad To be Your Supplier !</h2>
            <Button element={nobelSections[currentIndex]} title="Let's Contact"/>
          </div>
    </section>
  );
};

export default Nobels;
