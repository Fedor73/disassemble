import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { User } from "../components/User/User";
import { Navigation } from "../components/Navigation/Navigation";
import { Continents } from "../components/Continents/Continents";
import { Countries } from "../components/Countries/Countries";
import { Home } from "../components/Home/Home";
import { Citi } from "../components/Citi/Citi";
import CountriesRedux from "./CountriesRedux"

class App extends Component {
    render() {
        const { user } = this.props;
        return (
            <Router>
                <div className="app">
                    <CountriesRedux />
                    <User name={user.name}>
                        <Navigation />
                    </User>


                    <Route exact path="/" component={Home} />
                    <Route path="/Continents" component={Continents} />
                    <Route path="/Countries" component={Countries} />
                    <Route path="/Citi/:id" component={Citi} />
                    <Route path="/Citi" component={Citi} />
                </div>
            </Router >
        );
    }
}
const mapStateToProps = store => {
    return {
        // user: store.user
        ...store
    };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
