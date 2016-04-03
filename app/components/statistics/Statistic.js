import React, { PropTypes } from 'react';

export default function Statistics({ name, value }) {
  return (
    <div>
      <span className="statName">{name}: </span>
      <span className="statValue">{value}</span>
    </div>
  );
}

Statistics.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
