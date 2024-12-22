import React from "react";
import "./ProductDisplay.css"; // Import the CSS file

const products = [
  { name: "Texapon KLK", source: "Malaysia" },
  { name: "Betaine", source: "China" },
  { name: "Betaine", source: "Egypt" },
  { name: "Carbopol", source: "China" },
  { name: "Coco Amine Oxide", source: "China" },
  { name: "Glycerin", source: "Malaysia" },
  { name: "Guar", source: "China" },
  { name: "Camberlan", source: "Malaysia" },
  { name: "Laurel Amine Oxide", source: "China" },
  { name: "Poly 7", source: "China" },
  { name: "Poly 39", source: "China" },
  { name: "Silicon 6265 Grade 100", source: "China" },
  { name: "Texapon Aluminum", source: "China" },
  { name: "Rosin", source: "India" },
  { name: "Linet 16", source: "Malaysia" },
  { name: "Linet 5", source: "Malaysia" },
  { name: "Acrylic", source: "China" },
  { name: "Silicon 5875", source: "China" },
  { name: "Silicon 1214", source: "China" },
];

const ProductCard = ({ name, source }) => (
  <div className="product-card">
    <h3 className="product-name">{name}</h3>
    <p className="product-source">Source: {source}</p>
  </div>
);

const NobelChemist = () => (
  <div className="product-display">
    <h1 className="product-title">Our Products</h1>
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} name={product.name} source={product.source} />
      ))}
    </div>
  </div>
);

export default NobelChemist;
