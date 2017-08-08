import { getCityList, setCityList } from './../helpers/helpers';
import { ADD_INITIAL_CITY_LIST, UPDATE_CITY_LIST, REMOVE_CITY } from './../actions/actions';

const initialState = {
  list: []
};

export const getCitiesList = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CITY_LIST: {
      const checkCity = state.list.filter(city => city === action.payload);

      if (!checkCity.length) {
        return Object.assign({}, state, {
          list: state.list.length < 10 ? state.list.concat(action.payload) : state.list.slice(1).concat(action.payload) 
        });
      } else {
        return state;
      }
    }
    case REMOVE_CITY: {
      const newList = state.list.filter(city => city !== action.payload);
      console.log('newList', newList);

      return Object.assign({}, state, { list: newList });
    }
    case ADD_INITIAL_CITY_LIST:
      return Object.assign({}, state, { list: action.payload });
    default:
      return state;
  }
};
