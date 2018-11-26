import React from "react";
import "./countries.scss";
import axios from "axios";

export default class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.teleport.org/api/countries/`)
      .then(res => {
        const result = res.data;
        this.setState({
          isLoaded: true,
          items: result._links["country:items"]
        });
      })
      .catch(error => this.setState({ isLoaded: true, error }));
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
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      );
    }
  }
}
