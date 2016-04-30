import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gameStatePublisher from './middlewares/GameStatePublisher';
import actionsPerMinuteLogger from './middlewares/ActionsPerMinuteLogger';
import reducer from './reducers/index';
import { webSocketConnectionRequested } from './actions/WebSocketActions';
import SpeedTyper from './components/SpeedTyper';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, gameStatePublisher, actionsPerMinuteLogger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
store.dispatch(webSocketConnectionRequested());

render(
  <Provider store={store}>
    <SpeedTyper />
  </Provider>,
  document.getElementById('container')
);
