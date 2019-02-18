import React from "react";
import "./citi.scss";
import { Link } from "react-router-dom";

export class Citi extends React.Component {
  render() {
    const { currencycode, name, population } = this.props;
    return (
      <div className="citi_info">
        <Link className="bacmain" to="/Countries">
          вернуться назад
        </Link>
        <h1>Данные по городу</h1>
        <span>{currencycode}</span>
        <span>{name}</span>
        <span>{population}</span>
      </div>
    );
  }
}
