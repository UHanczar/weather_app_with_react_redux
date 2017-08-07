import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { removeCity } from './../actions/actionCreators';

import RenderCities from './RenderCities';

class RecentCities extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveCity = this.handleRemoveCity.bind(this);
  }

  handleRemoveCity(city) {
    // console.log('city to remove', city);
    this.props.deleteCity(city);
  }

  render() {
    return (
      <div className='recent-cities'>
        <h2>Or check among recent requests</h2>
        <RenderCities cities={this.props.cities} removeCity={this.handleRemoveCity} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.getCitiesList.list
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteCity(city) {
    console.log('city to remove', city);
    dispatch(removeCity(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentCities);