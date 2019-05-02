import React from "react";
import { Link } from "react-router-dom";
const Greeting = ({ currentUser, logout, location }) => {
  // const login? = (currentUser) => {
  //   if (currentUser){
  //     console.log('already sign in');
  //   }
  // }

  const sessionPage = () => {
    {
      if (location.pathname.includes("login")) {
        return <Link to="/signup"> Sign up</Link>;
      } else if (location.pathname.includes("signup")) {
        return <Link to="/login"> Sign in</Link>;
      } else {
        return (
          <div>
            <Link to="/signup"> Sign up</Link>
            <Link to="/login"> Sign in</Link>
          </div>
        );
      }
    }
  };

  const greeting = () => (
    <div>
      <h2>Welcome, {currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? greeting() : sessionPage();
};

export default Greeting;
