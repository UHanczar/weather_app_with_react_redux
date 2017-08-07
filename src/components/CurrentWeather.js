import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getAPIData, updateCitiesList } from './../actions/actionCreators';

import WeatherData from './WeatherData';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.handleWeather = this.handleWeather.bind(this);
  }

  handleWeather(e) {
    // e.preventDefault();
    if (e.key === 'Enter') {
      const city = this.rootNode.value;
      this.rootNode.value = '';
      this.props.getWeather(city);
    }
  }

  render() {
    const { isLoading } = this.props.weather;
    return (
      <div className='current-weather'>
          <div className='current-weather-card'>
            <h2>Get weather from your city</h2>
            <input type='text' placeholder='Find a city' ref={node => this.rootNode = node} onKeyPress={this.handleWeather} />
            {isLoading ? <WeatherData data={this.props.weather.data} /> : <div></div>}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.getWeatherData,
    cities: state.getCitiesList
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWeather(val) {
    console.log(val);
    dispatch(getAPIData(val));
    // dispatch(updateCitiesList(val));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
