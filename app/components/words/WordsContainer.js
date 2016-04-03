import React, { Component, PropTypes } from 'react';
import PreviousWord from './PreviousWord';
import Words from './Words';
import WordInput from './WordInput';
import { every, sample, sampleSize, first, tail } from 'lodash';

export default class WordsContainer extends Component {
  static propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
    onInputEvaluated: PropTypes.func.isRequired
  };

  static defaultProps = {
    words: ['disturb', 'development', 'inexplosive', 'fashionably', 'laniferous', 'baseless',
      'tetartohedral', 'comprehensive', 'deflected', 'infectiousness', 'impenetrable',
      'gyroscopic', 'monstrosity', 'hexagon', 'differential']
  };

  state = {
    previousWord: { word: '', correct: true },
    activeWord: sample(this.props.words).split('').map(lettr => ({ letter: lettr })),
    inactiveWords: sampleSize(this.props.words, 5)
  };

  handleChange = (input) => {
    const evaluatedWord = this.state.activeWord.map((lettr, index) => {
      if (index < input.length) {
        return { letter: lettr.letter, correct: lettr.letter === input[index] };
      }
      return { letter: lettr.letter };
    });
    this.setState({ activeWord: evaluatedWord });
  };

  handleSubmit = () => {
    const evaluatedWord = {
      word: this.state.activeWord.map(letter => letter.letter).join(''),
      correct: every(this.state.activeWord, letter => letter.correct)
    };
    this.setState({
      previousWord: evaluatedWord,
      activeWord: first(this.state.inactiveWords).split('').map(lettr => ({ letter: lettr })),
      inactiveWords: tail(this.state.inactiveWords).concat(sample(this.props.words))
    });
    this.props.onInputEvaluated(evaluatedWord);
  };

  render() {
    return (
      <div>
        <PreviousWord word={this.state.previousWord} />
        <Words activeWord={this.state.activeWord} inactiveWords={this.state.inactiveWords} />
        <WordInput onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
