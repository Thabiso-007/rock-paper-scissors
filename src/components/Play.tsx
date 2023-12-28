import React, { FC } from "react";
import { Link } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";

interface PlayProps {
  setMyChoice: React.Dispatch<React.SetStateAction<string>>;
}

const Play: FC<PlayProps> = ({ setMyChoice }: PlayProps): React.ReactElement => {
  const setChoice = (e: React.MouseEvent<HTMLDivElement>): void => {
    setMyChoice(e.currentTarget.dataset.id || "");
  };

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setChoice}
            className="icon icon--paper"
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            onClick={setChoice}
            className="icon icon--scissors"
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="rock"
            onClick={setChoice}
            className="icon icon--rock"
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default Play;
