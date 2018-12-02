import React from "react";
import "./navigation.scss";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <div>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Countries">Countries</Link>
        </li>
        <li>
          <Link to="/continents">continents</Link>
        </li>
      </ul>
    </div>
  );
};
