import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getAPIData, updateCitiesList } from './../actions/actionCreators';
import CurrentWeather from './CurrentWeather';
import RecentCities from './RecentCities';

const Container = () => (
  <div className='container'>
    <CurrentWeather />
    <RecentCities />
  </div>
);

export default Container;
