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
    case 'CHANGE_INPUT':
      return merge(state, { currentInput: action.payload });
    case 'SUBMIT_INPUT': {
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
