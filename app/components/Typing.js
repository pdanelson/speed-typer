import React, { PropTypes } from 'react';

export default function Typing({ onChange, onSubmit, input, gameStarted }) {
  const handleInput = (event) => {
    onChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === ' ') {
      event.preventDefault();
      onSubmit(input);
    }
  };

  return (
    <form>
      <input type="text" placeholder="Type here" value={input} disabled={!gameStarted}
        onChange={handleInput} onKeyDown={handleKeyDown}
      />
    </form>
  );
}

Typing.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  gameStarted: PropTypes.bool.isRequired
};
