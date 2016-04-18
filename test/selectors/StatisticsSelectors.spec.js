/* global describe:false, it:false expect:false */
import { selectAccuracy, selectWpm, selectTypedCount } from '../../app/selectors/StatisticsSelectors';

describe('StatisticsSelectors', () => {
  describe('selectAccuracy', () => {
    it('should calculate accuracy', () => {
      expect(selectAccuracy({
        timer: {
          seconds: 6,
          started: true
        },
        words: {
          evaluated: [
            { word: 'word1', correct: true },
            { word: 'word2', correct: false }
          ],
          upcoming: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb']
        },
        input: ''
      })).to.eql(50);
    });
  });

  describe('selectWpm', () => {
    it('should calculate words per minute', () => {
      expect(selectWpm({
        timer: {
          seconds: 6,
          started: true
        },
        words: {
          evaluated: [
            { word: 'word1', correct: true },
            { word: 'word2', correct: false }
          ],
          upcoming: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb']
        },
        input: ''
      })).to.eql(20);
    });
  });


  describe('calcTypedCount', () => {
    it('should calculate typed words count', () => {
      expect(selectTypedCount({
        timer: {
          seconds: 6,
          started: true
        },
        words: {
          evaluated: [
            { word: 'word1', correct: true },
            { word: 'word2', correct: false }
          ],
          upcoming: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb']
        },
        input: ''
      })).to.eql(2);
    });
  });
});

