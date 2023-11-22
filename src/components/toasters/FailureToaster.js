const FailurueToaster = ({ word, resetGame }) => {
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{word}</strong>.
      </p>
      <button onClick={() => resetGame()}> Reset Game</button>
    </div>
  );
};

export default FailurueToaster;
