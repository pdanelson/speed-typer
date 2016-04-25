/* global describe:false, it:false, expect:false, sinon:false, beforeEach:false, afterEach:false */
import configureMockStore from 'redux-mock-store';
import actionsPerMinuteLogger from '../../app/middlewares/ActionsPerMinuteLogger';

describe('ActionsPerMinuteLogger', () => {
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    clock.restore();
    console.log.restore();
  });

  it('should correctly log dispatched actions per minute', () => {
    const mockStore = configureMockStore([actionsPerMinuteLogger])({});
    mockStore.dispatch({ type: 'irrelevant' });
    clock.tick(1000);
    mockStore.dispatch({ type: 'irrelevant' });
    clock.tick(3000);
    mockStore.dispatch({ type: 'irrelevant' });
    clock.tick(5000);

    expect(console.log.getCall(0).args[0]).to.eql('Actions per minute: 24');
    expect(console.log.getCall(1).args[0]).to.eql('Actions per minute: 12');
    expect(console.log.getCall(2).args[0]).to.eql('Actions per minute: 0');
  });
});
