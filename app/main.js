import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';
import SpeedTyper from './components/SpeedTyper';

render(
  <Provider store={createStore(reducer, applyMiddleware(thunkMiddleware))}>
    <SpeedTyper />
  </Provider>,
  document.getElementById('container')
);
