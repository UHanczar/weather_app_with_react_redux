import React, { Component } from 'react';

class WeatherData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const url = `http://openweathermap.org/img/w/`;
    // const img = this.props.data.weather[0].icon;
    return (
      <div className='weather-data'>
        <div className='weather-data-location'>
          {this.props.data.name}, {this.props.data.sys.country}
        </div>
        <div className='weather-data-temp'>
          {Math.round(this.props.data.main.temp)} °C
        </div>
        <div className='weather-data-desc'>
          <img src={`http://openweathermap.org/img/w/${this.props.data.weather[0].icon}.png`} alt='weather-pic' />
          <span>{this.props.data.weather[0].main}</span>
        </div>
        <div className='weather-data-date'>{Date().substr(0, 15)}</div>
      </div>
    );
  }
}

export default WeatherData;
