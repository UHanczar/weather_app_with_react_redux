import React from 'react';
import PropTypes from 'prop-types';

const City = (props) => (
  <div className='city'>
    <div
      className='city-link'
      onClick={() => props.findCityWeather(props.city)}
    >
      <div>{props.city}</div>
    </div>
    <div
      className='btn-remove'
      onClick={() => props.removeCity(props.city)}
    >+</div>
  </div>
);

City.propTypes = {
  city: PropTypes.string.isRequired,
  findCityWeather: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired
};

export default City;
