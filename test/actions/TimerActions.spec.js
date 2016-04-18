/* global describe:false, it:false, expect:false */
import { incrementTimer, startTimer } from '../../app/actions/TimerActions';
import { INCREMENT_TIMER } from '../../app/constants/TimerActionType';

describe('TimerActions', () => {
  it('incrementTimer should create INCREMENT_TIMER action', () => {
    expect(incrementTimer()).to.eql({
      type: INCREMENT_TIMER
    });
  });
});
