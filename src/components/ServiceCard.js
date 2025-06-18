import React from "react";

const ServiceCard = ({ title, image, items }) => (
  <div className="service-card">
    <img
      src={`/images/${image}`}
      alt={title}
      className="service-img"
      width="64"
      height="64"
      style={{ marginBottom: "10px" }}
    />
    <div className="service-title" style={{ fontWeight: "bold", marginBottom: "8px" }}>{title}</div>
    <ul className="service-items">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
);

export default ServiceCard;
