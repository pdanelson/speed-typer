import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SpeedTyperReducer from './reducers/SpeedTyperReducer';
import SpeedTyper from './components/SpeedTyper';

render(
  <Provider store={createStore(SpeedTyperReducer)}>
    <SpeedTyper />
  </Provider>,
  document.getElementById('container')
);
