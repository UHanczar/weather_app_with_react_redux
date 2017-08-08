import React from 'react';
import PropTypes from 'prop-types';

const WeatherData = props => (
  <div className='weather-data'>
    <div className='weather-data-location'>
      {props.data.name}, {props.data.sys.country}
    </div>
    <div className='weather-data-temp'>
      {Math.round(props.data.main.temp)} °C
    </div>
    <div className='weather-data-desc'>
      <img src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt='weather-pic' />
      <span>{props.data.weather[0].main}</span>
    </div>
    <div className='weather-data-date'>{Date().substr(0, 15)}</div>
  </div>
);

WeatherData.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired
};

export default WeatherData;
