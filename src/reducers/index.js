import { combineReducers } from 'redux';

import { getWeatherData } from './getWeatherData';
import { getCitiesList } from './citiesList';

export default combineReducers({ getWeatherData, getCitiesList });