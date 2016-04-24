/* global describe:false, it:false, expect:false, sinon:false, beforeEach:false, before:false,
 after:false. afterEach:false, context:false */
import { WebSocket, Server } from 'mock-socket';
import { webSocketConnectionRequested } from '../../app/actions/WebSocketActions';
import gameStatePublisher from '../../app/middlewares/GameStatePublisher';

const actualWebSocket = window.WebSocket;
let clock;
let mockServer;

describe('GameStatePubliser', () => {
  before(() => {
    global.WebSocket = WebSocket;
    clock = sinon.useFakeTimers();
  });

  after(() => {
    global.WebSocket = actualWebSocket;
    clock.restore();
  });

  beforeEach(() => {
    mockServer = new Server('ws://localhost:8081');
    webSocketConnectionRequested(sinon.stub(), sinon.stub());
  });

  afterEach(() => {
    mockServer.close();
  });

  context('when game state is changed by actions and connection is active', () => {
    const initial = {
      webSocket: { connected: true },
      opponent: {},
      highscores: {},
      timer: {},
      words: {},
      input: ''
    };
    const final = {
      webSocket: { connected: true },
      opponent: {},
      highscores: {},
      timer: {},
      words: {},
      input: 'changed'
    };
    it('should call next and send websocket message', () => {
      const onMessage = sinon.stub();
      mockServer.on('message', onMessage);
      const getState = sinon.stub();
      getState.onCall(0).returns(initial).onCall(1).returns(final).onCall(2).returns(final);
      const store = { getState };
      const action = { type: 'irrelevant' };
      const next = sinon.stub().withArgs(action).returns({});

      gameStatePublisher(store)(next)(action);
      expect(next).to.have.been.calledOnce;
      expect(onMessage).to.have.been.calledWith('{"highscores":{},"timer":{},' +
        '"words":{},"input":"changed"}');
    });
  });

  context('when game state is changed by action and connection is not active', () => {
    const initial = {
      webSocket: { connected: false },
      opponent: {},
      highscores: {},
      timer: {},
      words: {},
      input: ''
    };
    const final = {
      webSocket: { connected: false },
      opponent: {},
      highscores: {},
      timer: {},
      words: {},
      input: 'changed'
    };
    it('should call next and not send websocket message', () => {
      const onMessage = sinon.stub();
      mockServer.on('message', onMessage);
      const getState = sinon.stub();
      getState.onCall(0).returns(initial).onCall(1).returns(final).onCall(2).returns(final);
      const store = { getState };
      const action = { type: 'irrelevant' };
      const next = sinon.stub().withArgs(action).returns({});

      gameStatePublisher(store)(next)(action);
      expect(next).to.have.been.calledOnce;
      expect(onMessage).to.not.have.been.called;
    });
  });

  context('when game state is not changed by actions and connection is active', () => {
    const initial = {
      webSocket: { connected: true },
      opponent: {},
      highscores: {},
      timer: {},
      words: {},
      input: ''
    };
    const final = {
      webSocket: { connected: true },
      opponent: { input: 'irrelevant change' },
      highscores: {},
      timer: {},
      words: {},
      input: ''
    };
    it('should call next and not send websocket message', () => {
      const onMessage = sinon.stub();
      mockServer.on('message', onMessage);
      const getState = sinon.stub();
      getState.onCall(0).returns(initial).onCall(1).returns(final).onCall(2).returns(final);
      const store = { getState };      const action = { type: 'irrelevant' };
      const next = sinon.stub().withArgs(action).returns({});

      gameStatePublisher(store)(next)(action);
      expect(next).to.have.been.calledOnce;
      expect(onMessage).to.not.have.been.called;
    });
  });
});
