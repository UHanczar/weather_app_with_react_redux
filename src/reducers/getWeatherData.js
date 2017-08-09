import { SET_API_DATA, SET_ERROR_MESSAGE, LOADING } from './../actions/actions';

const initialState = {
  data: {},
  isLoading: false,
  isLoaded: false,
  errorMessage: false
};

export const getWeatherData = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { data: {}, isLoading: true, isLoaded: false, errorMessage: false });
    case SET_API_DATA:
      return Object.assign({}, state, { data: action.payload, isLoading: false, isLoaded: true, errorMessage: '' });
    case SET_ERROR_MESSAGE:
      return Object.assign({}, state, { data: {}, isLoading: false, isLoaded: false, errorMessage: action.payload });
    default:
      return state;
  }
};

