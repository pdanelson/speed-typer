/* global describe:false, it:false, expect:false, sinon:false */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { incrementTimer, startTimer } from '../../app/actions/TimerActions';
import { INCREMENT_TIMER } from '../../app/constants/TimerActionType';

describe('TimerActions', () => {
  it('incrementTimer should create INCREMENT_TIMER action', () => {
    expect(incrementTimer()).to.eql({
      type: INCREMENT_TIMER
    });
  });

  it('startTimer should create INCREMENT_TIMER action every second ', () => {
    const clock = sinon.useFakeTimers();
    const mockStore = configureMockStore([thunk])({ timer: { seconds: 0, active: true } });
    mockStore.dispatch(startTimer());
    clock.tick(2000);
    const expectedActions = [
      { type: INCREMENT_TIMER },
      { type: INCREMENT_TIMER }
    ];
    expect(mockStore.getActions()).to.eql(expectedActions);
    clock.reset();
  });
});
