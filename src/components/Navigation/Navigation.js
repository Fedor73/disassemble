import React from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
  return (
    <div>
      <ul className="navigation">
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Countries">
            Countries
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/continents">
            continents
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
