import React from "react";
import "./countries.scss";
// import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setProducts } from "../../actions/setCountries";

export class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.teleport.org/api/countries/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result._links["country:items"]
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className="els">
          {items.map(item => (
            <Link key={item.name} to="/Citi">
              {item.name}
            </Link>
          ))}
        </ul>
      );
    }
  }
}

const mapStateToProps = country => ({
  country: country.items,
  isReady: country.isReady
});

const mapDispatchToProps = dispatch => ({
  setProducts: country => dispatch(setProducts(country))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
