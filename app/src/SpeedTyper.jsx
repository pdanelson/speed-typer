define(['react', './Statistics.jsx', './Target.jsx', './Input.jsx'],
  (React, Statistics, Target, Input) => {
    class SpeedTyper extends React.Component {
      static propTypes = {
        words: React.PropTypes.arrayOf(React.PropTypes.string)
      };

      state = {
        activeWord: this.props.words[Math.floor(Math.random() * this.props.words.length)],
        startTime: (new Date()).getTime(),
        statistics: {
          correctCount: 0,
          mistakeCount: 0,
          wpm: 0,
          accuracy: 0
        }
      };

      validateWord = (word) => {
        if (word.length !== this.state.activeWord.length) {
          return false;
        }
        const newStats = this.calculateStatistics(word, this.state.statistics);
        this.setState({
          statistics: newStats,
          activeWord: this.pickRandomWord()
        });
        return true;
      };

      calculateStatistics = (word, oldStats) => {
        const newStats = {};
        if (word === this.state.activeWord) {
          newStats.correctCount = oldStats.correctCount + 1;
          newStats.mistakeCount = oldStats.mistakeCount;
        } else {
          newStats.mistakeCount = oldStats.mistakeCount + 1;
          newStats.correctCount = oldStats.correctCount;
        }
        const total = newStats.correctCount + newStats.mistakeCount;
        newStats.accuracy = Math.round(newStats.correctCount / total * 10000) / 100;
        const elapsedMinutes = ((new Date()).getTime() - this.state.startTime) / 1000 / 60;
        newStats.wpm = Math.round(total / elapsedMinutes * 100) / 100;
        return newStats;
      };

      pickRandomWord = () => this.props.words[Math.floor(Math.random() * this.props.words.length)];

      render() {
        return (
          <div>
            <Statistics statistics={this.state.statistics} />
            <Target word={this.state.activeWord} />
            <Input wordValidationFn={this.validateWord} />
          </div>
        );
      }
    }

    return SpeedTyper;
  });
