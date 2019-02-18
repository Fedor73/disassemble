import React from "react";
import PropTypes from "prop-types";
import logo from "../../img/logo.svg";

export class User extends React.Component {
  render() {
    const { name, props } = this.props;
    return (
      <div className="wrap-testm">
        <p className="testmapstate">{name}!</p>
        <div className="wrap-child">
          {this.props.children}
          <div className="logo-img">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="wpap-title">
          <h1 className="testm__title">TELEPORT FOR DEVELOPERS</h1>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
};
