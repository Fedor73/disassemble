import React from "react";
// import axios from "axios";
import Searchbar from "./../SearchBar";

export class Continents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Searchbar />
          <ul className="els">
            {items.map(item => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
