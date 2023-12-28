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
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore((prevScore) => prevScore + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      setScore((prevScore) => prevScore - 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore((prevScore) => prevScore + 1);
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore((prevScore) => prevScore - 1);
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore((prevScore) => prevScore + 1);
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore((prevScore) => prevScore - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    const timer = counter > 0 ? setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000) : Result();
  
    return () => {
      if (typeof timer === 'number') {
        clearInterval(timer);
      }
    };
  }, [counter, house, Result]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoice} ${
            playerWin === "win" ? `icon icon--${myChoice}--winner` : ""
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
            className={`icon icon--${house} ${
              playerWin === "lose" ? `icon icon--${house}--winner` : ""
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
