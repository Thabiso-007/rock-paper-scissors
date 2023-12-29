import React, { useEffect, useState, FC } from "react";
import { Link } from "react-router-dom";

interface GameProps {
  score: number;
  myChoice: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Game: FC<GameProps> = ({ score, myChoice, setScore }: GameProps): React.ReactElement => {
  const [house, setHouse] = useState<string>("");
  const [playerWin, setPlayerWin] = useState<string>("");

  const [counter, setCounter] = useState<number>(3);

  const newHousePick = () => {
    const choices: string[] = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    let result = "draw"; // Default result is a draw

    if (myChoice === "rock" && house === "scissors") {
      result = "win";
    } else if (myChoice === "rock" && house === "paper") {
      result = "lose";
    } else if (myChoice === "scissors" && house === "paper") {
      result = "win";
    } else if (myChoice === "scissors" && house === "rock") {
      result = "lose";
    } else if (myChoice === "paper" && house === "rock") {
      result = "win";
    } else if (myChoice === "paper" && house === "scissors") {
      result = "lose";
    }

    setPlayerWin(result);

    // Update score only if the result is a win or lose
    if (result === "win" || result === "lose") {
      setScore((prevScore) => (result === "win" ? prevScore + 1 : prevScore - 1));
    }
  };

  useEffect(() => {
    const timer = counter > 0 ? setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000) : Result();

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [counter, house]);


  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoice} ${playerWin === "win" ? `icon icon--${myChoice}--winner` : ""
            }`}
        ></div>
      </div>
      {playerWin === "win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="play-again" onClick={() => setHouse("")}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setHouse("")}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="play-again" onClick={() => setHouse("")}>
            Play Again
          </Link>
        </div>
      )}

      <div className="game__house">
        <span className="text">The House Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${house} ${playerWin === "lose" ? `icon icon--${house}--winner` : ""
              }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
