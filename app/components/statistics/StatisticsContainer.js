import React, { Component, PropTypes } from 'react';
import Statistic from './Statistic';

export default class StatisticsContainer extends Component {
  static propTypes = {
    evaluatedWords: PropTypes.arrayOf(PropTypes.shape({
      word: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired
    }).isRequired).isRequired
  };

  state = {
    startTime: Date.now()
  };

  calculateAccuracy = () => {
    const correctWords = this.props.evaluatedWords.filter(word => word.correct);
    return Math.round(correctWords.length / this.props.evaluatedWords.length * 10000) / 100 || 0;
  };

  calculateWordsPerMinute = () => {
    const elapsedMinutes = (Date.now() - this.state.startTime) / 1000 / 60;
    return Math.round(this.props.evaluatedWords.length / elapsedMinutes * 100) / 100 || 0;
  };

  render() {
    const totalCount = this.props.evaluatedWords.length;
    const wpm = this.calculateWordsPerMinute();
    const accuracy = this.calculateAccuracy();
    return (
      <div>
        <Statistic name="Words typed" value={totalCount.toString()} />
        <Statistic name="Words per minute" value={wpm.toString()} />
        <Statistic name="Accuracy" value={accuracy.toString().concat('%')} />
      </div>
    );
  }
}

