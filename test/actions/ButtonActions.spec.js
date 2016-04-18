/* global describe:false, it:false, expect:false, sinon:false */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { startGame, stopGame } from '../../app/actions/ButtonsActions';
import WordsActions from '../../app/actions/WordsActions';
import { START_GAME, STOP_GAME } from '../../app/constants/ButtonsActionType';
import { FETCH_WORDS_SUCCESS, FETCH_WORDS_REQUEST } from '../../app/constants/WordsActionType';
import { INCREMENT_TIMER } from '../../app/constants/TimerActionType';

describe('ButtonsActions', () => {
  it('stopGame should create STOP_GAME action', () => {
    expect(stopGame(20, 50)).to.eql({
      type: STOP_GAME,
      payload: {
        wpm: 20,
        accuracy: 50
      }
    });
  });

  it('startGame should do nothing if fetching words already in progress', () => {
    const mockStore = configureMockStore([thunk])({ words: { fetching: true } });
    mockStore.dispatch(startGame());
    expect(mockStore.getActions()).to.eql([]);
  });

  it('startGame should create START_GAME action and fetch words', () => {
    const mockStore = configureMockStore([thunk])({ words: { fetching: false } });
    mockStore.dispatch(startGame());
    const expectedActions = [
      { type: START_GAME },
      { type: FETCH_WORDS_REQUEST }
    ];
    expect(mockStore.getActions()).to.eql(expectedActions);
  });
});
