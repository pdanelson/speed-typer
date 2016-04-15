import { sample, sampleSize, first, tail } from 'lodash';

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2);

const words = ['disturb', 'hexagon', 'development', 'inexplosive', 'fashionably', 'laniferous',
  'baseless', 'tetartohedral', 'comprehensive', 'deflected', 'infectiousness', 'impenetrable',
  'gyroscopic', 'monstrosity', 'differential'];

const initializeState = () => ({
  startTime: Date.now(),
  evaluatedWords: [],
  upcomingWords: sampleSize(words, 5),
  currentInput: ''
});

export default function SpeedTyperReducer(state = initializeState(), action) {
  switch (action.type) {
    case 'INPUT_CHANGED':
      return merge(state, { currentInput: action.payload });
    case 'INPUT_SUBMITTED': {
      const evaluatedWords = state.evaluatedWords.concat({
        word: first(state.upcomingWords),
        correct: first(state.upcomingWords) === state.currentInput
      });
      const upcomingWords = tail(state.upcomingWords).concat(sample(words));
      return merge(state, { evaluatedWords, upcomingWords, currentInput: '' });
    }
    default:
      return state;
  }
}

export function calcAccuracy(state) {
  const correctWords = state.evaluatedWords.filter(word => word.correct);
  return Math.round(correctWords.length / state.evaluatedWords.length * 10000) / 100 || 0;
}

export function calcWordsPerMinute(state) {
  const elapsedMinutes = (Date.now() - state.startTime) / 1000 / 60;
  return Math.round(state.evaluatedWords.length / elapsedMinutes * 100) / 100 || 0;
}

export function calcTypedCount(state) {
  return state.evaluatedWords.length;
}
