import React, { Component, PropTypes } from 'react';

export default class WordInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    input: ''
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
    this.props.onChange(event.target.value);
  };

  handleKeyDown = (event) => {
    if (event.key === ' ') {
      event.preventDefault();
      this.setState({ input: '' });
      this.props.onSubmit();
    }
  };

  render() {
    return (
      <form>
        <input type="text" placeholder="Type here" value={this.state.input}
          onChange={this.handleChange} onKeyDown={this.handleKeyDown}
        />
      </form>
    );
  }
}

