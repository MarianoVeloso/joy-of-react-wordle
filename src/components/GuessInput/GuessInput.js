function GuessInput({ handleFormSubmit, handleOnGuessChange, guess }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={handleOnGuessChange}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
      />
    </form>
  );
}

export default GuessInput;
