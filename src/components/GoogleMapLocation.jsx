import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaLocationArrow, FaCalendarAlt, FaPhone } from "react-icons/fa";
import "./GoogleMapLocation.css";
import { useParams } from "react-router-dom"; // Import useParams
import { nobelSections } from "../constant";

const MapComponent = () => {
  const position = [33.5377, 36.1898]; // Replace with your company's coordinates
  const { Title } = useParams(); // Extract title from route params

  // Color function
  const color = (t) => {
    let item = nobelSections.find((item) => item.title == t);
    return item ? item.color : "#000"; // Default to black if not found
  };

  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h1 className="product-title" style={{ color: `${color(Title)}` }}>
        Our Location
      </h1>
      <div className="map-content">
        <div>
          <FaLocationArrow /> Location
        </div>
        <div>
          <FaCalendarAlt /> Calendar
        </div>
        <div>
          <FaPhone /> Phone Number
        </div>
      </div>
      <MapContainer
        center={position}
        zoom={20}
        zoomControl={false}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Our Company Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
