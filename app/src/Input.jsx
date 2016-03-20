define(['react'], (React) => {
  class Input extends React.Component {
    static propTypes = {
      wordValidationFn: React.PropTypes.func.isRequired
    };

    state = {
      word: ''
    };

    validate = (input) => {
      if (this.props.wordValidationFn(input.target.value)) {
        this.setState({ word: '' });
      } else {
        this.setState({ word: input.target.value });
      }
    };

    render() {
      return (
        <form>
          <input type="text" value={this.state.word} placeholder="Word" onChange={this.validate} />
        </form>
      );
    }
  }

  return Input;
});
