import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Navigation from "./Navigation";
import Countries from "./Countries";
import Citi from "./Citi";
import Home from "./Home";
import Continents from "./Continents";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/Continents" component={Continents} />
          <Route path="/Countries" component={Countries} />
          <Route path="/Citi" component={Citi} />
        </div>
      </Router>
    );
  }
}

export default App;
