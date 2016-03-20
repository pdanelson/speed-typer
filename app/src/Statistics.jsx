define(['react'], (React) => {
  function Statistics({ statistics: { correctCount, mistakeCount, wpm, accuracy } }) {
    return (
      <div>
        <p>Correctly typed words: {correctCount}</p>
        <p>Mistyped words: {mistakeCount}</p>
        <p>Words per minute: {wpm}</p>
        <p>Typing accuracy: {accuracy}%</p>
      </div>
    );
  }

  Statistics.propTypes = {
    statistics: React.PropTypes.objectOf(React.PropTypes.number.isRequired).isRequired
  };

  return Statistics;
});
