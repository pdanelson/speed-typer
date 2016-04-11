import React, { PropTypes } from 'react';

export default function Typing({ onChange, onSubmit, currentInput }) {
  const handleInput = (event) => {
    onChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === ' ') {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <form>
      <input type="text" placeholder="Type here" value={currentInput}
        onChange={handleInput} onKeyDown={handleKeyDown}
      />
    </form>
  );
}

Typing.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  currentInput: PropTypes.string.isRequired
};
