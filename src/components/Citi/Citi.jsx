import React from "react";
import "./citi.scss";

export class Citi extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }
  render() {
    const { currencycode, name, population } = this.props;
    return (
      <div>
        <span>{currencycode}</span>
        <span>{name}</span>
        <span>{population}</span>
      </div>
    );
  }
}
