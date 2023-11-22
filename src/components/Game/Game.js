import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import { useState } from "react";
import SuccessToaster from "../toasters/SuccessToaster";
import FailurueToaster from "../toasters/FailureToaster";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  console.log(answer);

  const [guess, setGuesses] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayFailurue, setDisplayFailurue] = useState(false);

  const handleOnGuessChange = (event) => {
    console.log(guess);
    const currentValue = event.target.value.toUpperCase();
    setGuesses(currentValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    guessList.push(guess);
    setGuessList(guessList);
    setGuesses("");
    setAttempts(attempts + 1);
    if (attempts === 5 && guess !== answer) {
      setDisplayFailurue(true);
    }
    if (guess === answer) {
      setDisplaySuccess(true);
    }
  };

  const resetGame = () => {
    setGuesses("");
    setGuessList([]);
    setAttempts(0);
    setDisplayFailurue(false);
    setDisplaySuccess(false);
  };

  return (
    <>
      <Guess guessList={guessList} answer={answer} />
      <GuessInput
        guess={guess}
        handleFormSubmit={handleFormSubmit}
        handleOnGuessChange={handleOnGuessChange}
      />
      {displaySuccess && <SuccessToaster />}
      {displayFailurue && (
        <FailurueToaster word={answer} resetGame={resetGame} />
      )}
    </>
  );
}

export default Game;
