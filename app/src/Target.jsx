define(['react'], (React) => {
  function Target({ word }) {
    return (
      <div>
        Type the word: {word}
      </div>
    );
  }

  Target.propTypes = {
    word: React.PropTypes.string.isRequired
  };

  return Target;
});
