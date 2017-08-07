import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/style.scss';

import store from './store/store';

import Container from './components/Container';

console.log('store', store.getState());

const App = () => (
  <div>
    <Container />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
