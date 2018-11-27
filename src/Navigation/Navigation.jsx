import React from "react";
import "./navigation.scss";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/continents">continents</Link>
        </li>
        <li>
          <Link to="/Countries">Countries</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
