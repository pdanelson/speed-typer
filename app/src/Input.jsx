define(['react'], (React) => {
  function Input({ wordValidationFn }) {
    return (
      <form>
        <input type="text" placeholder="Type here" onChange={wordValidationFn} />
      </form>
    );
  }

  Input.propTypes = {
    wordValidationFn: React.PropTypes.func.isRequired
  };

  return Input;
});
