/* global describe:false, it:false expect:false, sinon:false */
import Lodash from 'lodash';
import reducer, { calcAccuracy, calcTypedCount, calcWordsPerMinute } from '../../app/reducers/SpeedTyperReducer';

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
        type: 'INPUT_CHANGED',
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
        type: 'INPUT_SUBMITTED'
      })
    ).to.eql({
      startTime: 0,
      evaluatedWords: [
        { word: 'disturb', correct: true }
      ],
      upcomingWords: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb'],
      currentInput: ''
    });
    Lodash.sample.restore();
  });
});

describe('calcAccuracy', () => {
  it('should calculate accuracy', () => {
    expect(calcAccuracy({
      startTime: 0,
      evaluatedWords: [
        { word: 'word1', correct: true },
        { word: 'word2', correct: false }
      ],
      upcomingWords: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb'],
      currentInput: ''
    })).to.eql(50);
  });
});

describe('calcWordsPerMinute', () => {
  it('should calculate words per minute', () => {
    const now = Date.now();
    const clock = sinon.useFakeTimers(now);
    clock.tick(6000);
    expect(calcWordsPerMinute({
      startTime: now,
      evaluatedWords: [
        { word: 'word1', correct: true },
        { word: 'word2', correct: false }
      ],
      upcomingWords: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb'],
      currentInput: ''
    })).to.eql(20);
    clock.reset();
  });
});

describe('calcTypedCount', () => {
  it('should calculate typed words count', () => {
    expect(calcTypedCount({
      startTime: 0,
      evaluatedWords: [
        { word: 'word1', correct: true },
        { word: 'word2', correct: false }
      ],
      upcomingWords: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb'],
      currentInput: ''
    })).to.eql(2);
  });
});
