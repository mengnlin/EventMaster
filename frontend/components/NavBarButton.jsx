import React from "react";
import "./NavBarButton.css";
import { Link } from "react-router-dom";

const NavBarButton = props => {
  const { onClick, link } = props;
  return (
    <Link to={link} className="nav-bar-button" onClick={onClick}>
      {props.label}
    </Link>
  );
};

export default NavBarButton;
