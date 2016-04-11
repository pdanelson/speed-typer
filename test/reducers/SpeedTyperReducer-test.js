/* global describe:false, context:false, it:false, before:false, after:false, expect:false, sinon:false */
import Lodash from 'lodash';
import reducer from '../../app/reducers/SpeedTyperReducer';

describe('SpeedTyperReducer', () => {
  it('should return initial state', () => {
    sinon.stub(Lodash, 'sampleSize', (collection, nr) => collection.slice(0, nr));
    const clock = sinon.useFakeTimers(Date.now());
    expect(
      reducer(undefined, {})
    ).to.eql({
      startTime: clock.now,
      evaluatedWords: [],
      upcomingWords: ['disturb', 'hexagon', 'development', 'inexplosive', 'fashionably'],
      currentInput: ''
    });
    clock.reset();
    Lodash.sampleSize.restore();
  });

  it('should handle changing input', () => {
    expect(
      reducer({
        startTime: 0,
        evaluatedWords: [],
        upcomingWords: ['disturb', 'hexagon', 'development', 'inexplosive', 'fashionably'],
        currentInput: 'dis'
      }, {
        type: 'CHANGE_INPUT',
        payload: 'dist'
      })
    ).to.eql({
      startTime: 0,
      evaluatedWords: [],
      upcomingWords: ['disturb', 'hexagon', 'development', 'inexplosive', 'fashionably'],
      currentInput: 'dist'
    });
  });

  it('should handle submitting input', () => {
    sinon.stub(Lodash, 'sample', (collection) => collection[0]);
    expect(
      reducer({
        startTime: 0,
        evaluatedWords: [],
        upcomingWords: ['disturb', 'hexagon', 'development', 'inexplosive', 'fashionably'],
        currentInput: 'disturb'
      }, {
        type: 'SUBMIT_INPUT'
      })
    ).to.eql({
      startTime: 0,
      evaluatedWords: [{
        word: 'disturb',
        correct: true }],
      upcomingWords: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb'],
      currentInput: ''
    });
    Lodash.sample.restore();
  });
});
