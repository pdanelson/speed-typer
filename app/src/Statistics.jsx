define(['react'], (React) => {
  function Statistics({ score }) {
    return (
      <div>
        Your score is: {score}
      </div>
    );
  }

  Statistics.propTypes = {
    score: React.PropTypes.number.isRequired
  };

  return Statistics;
});
