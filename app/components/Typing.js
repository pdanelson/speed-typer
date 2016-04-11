import React, { PropTypes } from 'react';

export default function Typing({ onChange, onSubmit }) {
  const handleInput = (event) => {
    onChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === ' ') {
      event.preventDefault();
      event.target.form.reset();
      onSubmit();
    }
  };

  return (
    <form>
      <input type="text" placeholder="Type here" onChange={handleInput} onKeyDown={handleKeyDown} />
    </form>
  );
}

Typing.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
