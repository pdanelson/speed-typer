import React, { Component } from 'react';
import StatisticsContainer from '../statistics/StatisticsContainer';
import WordsContainer from '../words/WordsContainer';

export default class SpeedTyper extends Component {
  state = {
    evaluatedWords: []
  };

  updateEvaluatedWords = (typedWord) => {
    this.setState({
      evaluatedWords: this.state.evaluatedWords.concat(typedWord)
    });
  };

  render() {
    return (
      <div>
        <StatisticsContainer evaluatedWords={this.state.evaluatedWords} />
        <WordsContainer onInputEvaluated={this.updateEvaluatedWords} />
      </div>
    );
  }

}
