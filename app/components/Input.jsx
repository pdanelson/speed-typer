import React, { PropTypes, Component } from 'react';

export default class extends Component {
  static propTypes = {
    wordValidationFn: PropTypes.func.isRequired
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

