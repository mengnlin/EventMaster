import React from "react";
import { Link } from "react-router-dom";
const Greeting = ({ currentUser, logout }) => {
  const sessionPage = () => (
    <div>
      <Link to="/login"> Sign in</Link>
      <Link to="/signup"> Sign up</Link>
    </div>
  );

  const greeting = () => (
    <div>
      <h2>Welcome, {currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? greeting() : sessionPage();
};

export default Greeting;
