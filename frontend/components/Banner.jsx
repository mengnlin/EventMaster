import React from "react";
import "./Banner.css";
const Banner = ({ city, description, cover }) => {
  return (
    <div className="banner-container">
      <div className="banner-text-container">
        <p>Things to do in</p>
        <h1>{city}</h1>
        <p>{description}</p>
      </div>
      <div
        style={{
          background: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className="banner-cover-container"
      />
    </div>
  );
};

export default Banner;
