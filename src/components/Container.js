import React from 'react';

import CurrentWeather from './CurrentWeather';
import RecentCities from './RecentCities';

const Container = () => (
  <div className='container'>
    <RecentCities />
    <CurrentWeather />
  </div>
);

export default Container;
