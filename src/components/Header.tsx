import React, { FC } from "react";

interface HeaderProps {
  score: number;
}

const Header: FC<HeaderProps> = ({ score }: HeaderProps): React.ReactElement => {
  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  );
};

export default Header;
