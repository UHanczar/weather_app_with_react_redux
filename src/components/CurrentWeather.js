import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAPIData } from './../actions/actionCreators';

import WeatherData from './WeatherData';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.handleWeather = this.handleWeather.bind(this);
  }

  handleWeather(e) {
    if (e.key === 'Enter') {
      const city = this.rootNode.value;
      this.rootNode.value = '';
      this.props.getWeather(city);
    }
  }

  render() {
    const { isLoading, isLoaded, errorMessage } = this.props.weather;

    const renderData = () => {
      if (isLoading) {
        return (<div className='loader'>Loading...</div>)
      } else if (isLoaded) {
        return (<WeatherData data={this.props.weather.data} />);
      } else if (errorMessage) {
        return (<div className='weather-data'>There is no city with this name. Check city's name and try again.</div>);
      } else {
        return (<div></div>)
      }
    };
    return (
      <div className='current-weather'>
        <div className='current-weather-card'>
          <h2>Get weather</h2>
          <input type='text' placeholder='Search weather by city' ref={node => this.rootNode = node} onKeyPress={this.handleWeather} />
          {renderData()}
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

const mapDispatchToProps = dispatch => ({
  getWeather(val) {
    console.log(val);
    dispatch(getAPIData(val));
    // dispatch(updateCitiesList(val));
  }
});

CurrentWeather.propTypes = {
  weather: PropTypes.shape({
    data: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    errorMessage: PropTypes.isRequired
  }).isRequired,
  getWeather: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
