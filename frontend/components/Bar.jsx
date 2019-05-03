import React from "react";
import "./bar.css";
import { Link } from "react-router-dom";
const Bar = props => {
  return (
    <header className="bar-container">
      <h1 className="bar-webname">
        <Link to="/">eventmaster</Link>
      </h1>
      {props.children}
    </header>
  );
};

export default Bar;
