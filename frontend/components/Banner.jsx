import React from "react";

const Banner = ({ city, description, cover }) => {
  return (
    <div>
      <div>
        <p>Things to do in</p>
        <h1>{city}</h1>
        <p>{description}</p>
      </div>
      <div style={{ background: `url(${cover})` }} />
    </div>
  );
};

export default Banner;
