define(['react', './Statistics.jsx', './Target.jsx', './Input.jsx'],
  (React, Statistics, Target, Input) => {
    class SpeedTyper extends React.Component {
      constructor(props) {
        super(props);
        this.pickRandomWord = this.pickRandomWord.bind(this);
        this.validateWord = this.validateWord.bind(this);
        this.state = {
          activeWord: this.pickRandomWord(),
          score: 0
        };
      }

      pickRandomWord() {
        const words = ['disturb', 'developmental', 'inexplosive', 'fashionably', 'laniferous'];
        return words[Math.floor(Math.random() * words.length)];
      }

      validateWord(word) {
        console.log(word);
        if (word === this.state.activeWord) {
          this.setState({
            score: this.state.score += 1,
            activeWord: this.pickRandomWord()
          });
        }
      }

      render() {
        return (
          <div>
            <Statistics score={this.state.score} />
            <Target word={this.state.activeWord} />
            <Input wordValidationFn={this.validateWord} />
          </div>
        );
      }
    }

    return SpeedTyper;
  });
