import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/style.scss';

import store from './store/store';
import { setCityList, getCityList } from './helpers/helpers';
import { addInitialCityList } from './actions/actionCreators';

import Container from './components/Container';

store.subscribe(() => {
  const state = store.getState();
  console.log('New State', state);
  setCityList(state.getCitiesList.list);
});

const initialCityList = getCityList();
store.dispatch(addInitialCityList(initialCityList));
console.log(initialCityList);

const App = () => (
  <div>
    <Container />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
