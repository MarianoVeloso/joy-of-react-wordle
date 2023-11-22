import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        const guess = guessList[index] || [];
        return (
          <p className="guess" key={index}>
            {range(5).map((_, i) => {
              let status = "";
              if (guess.length !== 0) {
                const checkGuessResult = checkGuess(guess, answer);
                status = checkGuessResult.find(
                  (item) => item.letter === guess[i]
                ).status;
              }
              return (
                <span className={"cell " + status} key={i}>
                  {guess[i] || ""}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
