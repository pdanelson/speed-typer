import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gameStatePublisher from './middlewares/GameStatePublisher';
import actionsPerMinuteLogger from './middlewares/ActionsPerMinuteLogger';
import reducer from './reducers/index';
import { webSocketConnectionRequested } from './actions/WebSocketActions';
import SpeedTyper from './components/SpeedTyper';

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    gameStatePublisher,
    actionsPerMinuteLogger
  )
);
store.dispatch(webSocketConnectionRequested());

render(
  <Provider store={store}>
    <SpeedTyper />
  </Provider>,
  document.getElementById('container')
);
