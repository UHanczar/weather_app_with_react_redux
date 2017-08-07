const initialState = {
  list: []
};

export const getCitiesList = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CITIES_LIST':
      console.log(state.list.length);
      const checkCity = state.list.filter(city => city === action.payload);
      if (!checkCity.length) {
        return Object.assign({}, state, { list: state.list.length < 10 ? state.list.concat(action.payload) : state.list.slice(1).concat(action.payload) });
      }
    default:
      return state;
  }
};
