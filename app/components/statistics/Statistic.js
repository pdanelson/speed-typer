import React, { PropTypes } from 'react';

export default function Statistic({ name, value }) {
  return (
    <div>
      {name}: {value}
    </div>
  );
}

Statistic.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
