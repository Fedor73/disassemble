import React from "react";

// const value = e.target.value.toLowerCase();

export default class SearchBar extends React.Component {
  state = {
    query: "",
    names: [
      { name: "Jolie" },
      { name: "Erin" },
      { name: "Qvan" },
      { name: "Qrin" },
      { name: "Evan" }
    ]
  };

  filterNames = query => {
    this.setState({ query: query });
  };

  render() {
    let filteredNames;
    if (this.state.query) {
      let searchTerm = new RegExp(this.state.query, "i");
      filteredNames = this.state.names.filter(name =>
        searchTerm.test(name.name)
      );
    } else {
      filteredNames = this.state.names;
    }

    return (
      <div>
        <input
          value={this.state.query}
          placeholder="name"
          onChange={e => {
            this.filterNames(e.target.value);
          }}
        />

        <div>
          {filteredNames.map(name => (
            <h1>{name.name}</h1>
          ))}
        </div>
      </div>
    );
  }
}
