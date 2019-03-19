import React, { Component } from "react";
import { connect } from "react-redux";
import { personsFetchData } from "../actions/setCountries"

class CountriesRedux extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.teleport.org/api/countries/')
  }

  render() {

    return (
      <div>
        qqqqqqqqqqqqqqqq
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: url => { dispatch(personsFetchData(url)) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesRedux);












